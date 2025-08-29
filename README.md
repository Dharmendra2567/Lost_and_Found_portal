
---

# Lost & Found Portal

A simple **Lost and Found Portal** built with **ReactJS**.  
Users can submit lost items, view submitted items, and a predefined **Admin (Moderator)** can approve/reject items.

---

## 🚀 Features

- 📌 **Submit Lost Items** with details like name, description, date, and contact info.  
- 📋 **View All Items** (only approved items are visible to users).  
- 🔐 **Moderator Dashboard** (only accessible by Admin).  
- ✅ **Admin Approves/Rejects Items**.  
- 🎨 User-friendly UI with styled forms and lists.  
- 🔄 Automatic redirect after successful form submission.  

---

## 📂 Project Structure

```

lost-found-portal/
│── public/
│   └── index.html
│
│── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ItemForm.js
│   │   ├── ItemList.js
│   │   └── ModeratorDashboard.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── SubmitItem.js
│   │   └── Moderator.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── package.json
├── README.md

````

---

## ⚙️ Installation & Setup

---

## ⚙️ Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/Dharmendra2567/Lost_and_Found_portal
   cd lost-found-portal

2. Install dependencies:

   ```
   npm install
   ```

3. Start development server:

   ```bash
   npm start
   ```

4. Open the app in your browser:

   ```
   http://localhost:3000
   ```

---

## 👨‍💻 Admin Access (Moderator Dashboard)

* The **Moderator Dashboard** is accessible at:

  ```
  http://localhost:3000/moderator
  ```

* Predefined Admin credentials:

  ```
  Username: admin
  Password: admin123
  ```

* Only Admin can view the moderator page and approve/reject submitted items.

---

## 📑 Pages Overview

- # Home page showing approved items.  
  ![Home Screenshot](./screenshots/approved_items.png)

- # Form to submit a lost item.  
  ![Submit Screenshot](./screenshots/submit_item.png)

- # Moderator dashboard (Admin-only access).  
  ![Moderator Screenshot](./screenshots/moderator_dashboard.png)


---

## ✅ Future Enhancements

* Implement database storage (MongoDB, Firebase, etc.).
* Add user authentication system.
* Upload images for lost items.
* Email notification when item status is updated.

---

## 🛠️ Built With

* ReactJS
* React Router
* CSS (for styling)

---

## 📜 License

This project is licensed under the MIT License.

````

---
