import { useEffect, useState } from "react";
import { getPendingItems, updateStatus } from "../services/api";

export default function ModeratorDashboard() {
  const [items, setItems] = useState([]);

  const loadData = () => {
    getPendingItems().then(res => setItems(res.data));
  };

  useEffect(() => { loadData(); }, []);

  const handleAction = async (id, status) => {
    await updateStatus(id, status);
    loadData();
    alert(`Item ${status}`);
  };

  return (
    <div className="p-4">
      <h3>Moderator Dashboard</h3><hr className="shadow-lg"></hr>
      {!items.length && <p>No Pending items found.</p>}
      {items.map(i => (
        <div key={i._id} className="card mb-2 p-2 w-50 shadow-lg" style={{ borderRadius: "12px" }}>
          <h5>{i.title}</h5>
          <p>{i.description}</p>
          <button className="btn btn-success me-2" onClick={() => handleAction(i._id, "Approved")}>
            Approve
          </button>
          <button className="btn btn-danger" onClick={() => handleAction(i._id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}
