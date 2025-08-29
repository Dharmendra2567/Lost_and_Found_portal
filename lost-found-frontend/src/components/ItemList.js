const { useEffect, useState } =require( "react");
const { getApprovedItems, claimItem } = require("../services/api");
const { getUserById } = require("../services/api");

export default function ItemList() {
  const [items, setItems] = useState([]);

  const [usernames, setUsernames] = useState({}); // key: userId, value: username

const findUserById = async (userId) => {
  if (!userId) return "Unknown";

  try {
    const res = await getUserById(userId);
    return res.data.username;
  } catch (err) {
    console.error("Error fetching user:", err);
    return "Unknown";
  }
};


useEffect(() => {
  getApprovedItems().then(async (res) => {
    setItems(res.data);
    // Fetch usernames for all items
    const userMap = {};
    for (const item of res.data) {
      if (item.user) {
        try {
          const response = await getUserById(item.user);
          userMap[item.user] = response.data.username;
        } catch (err) {
          userMap[item.user] = "Unknown";
        }
      }
    }
    setUsernames(userMap);
  });
}, []);

// A small helper component
function Username({ userId }) {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    if (!userId) {
      setUsername("Unknown");
      return;
    }
    getUserById(userId)
      .then((res) => setUsername(res.data.username))
      .catch(() => setUsername("Unknown"));
  }, [userId]);

  return <>{username}</>;
}





const handleClaim = async (id) => { await claimItem(id, "user123"); alert("You claimed this item!"); };
  return (
    <div className="p-4">
      <h3>Approved Items</h3>
      <hr className="shadow-lg" />
      {!items.length && <p>No Approved items found.</p>}

      <div className="d-flex flex-wrap gap-3">
        {items.map((i) => (
          <div
            key={i._id}
            className="card shadow-lg p-3"
            style={{
              width: "300px",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              borderRadius: "12px",
            }}
          >
            {/* Username at top-right corner */}
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "0.85rem",
                color: "#555",
                fontWeight: "bold",
              }}
            >
              {/* {let data = await findUserById(i.user);
              console.log("The username of each item: ",data)} */}
             {/* <Username userId={i.user} /> */}
            </span>

            <div>
              <h5>
                {i.title} ({i.category})
              </h5>
              <p className="text-truncate">{i.description}</p>
              <p>Status: {i.status}</p>
            </div>

            {i.status === "Approved" && (
              <button
                className="btn btn-success mt-auto"
                onClick={() => handleClaim(i._id)}
              >
                Claim
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
