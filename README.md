# StackSquad – Full Stack Team Management Web App

StackSquad is a modern MERN stack web application designed to manage student team members effectively. It allows you to add members, store personal/project details, upload images and documents, and view individual profiles with ease.

---


![image](https://github.com/user-attachments/assets/18275d23-9c86-4ac8-9306-a102a7a231a7)

![image](https://github.com/user-attachments/assets/debbb2ce-691a-46b1-bad1-3082aec5aa30)

![image](https://github.com/user-attachments/assets/c33e1fbb-93c2-4b7a-ab3a-3a8d8873b6e1)


## 🚀 Project Description

This full-stack project helps teams:
- Add member profiles with image and document uploads
- Store academic and personal information
- View members in a stylish UI grid
- Navigate and manage profiles smoothly
- Built with **MongoDB, Express.js, React.js, and Node.js**

---

## 🛠️ Installation Steps

### 📦 Clone the Repository
```bash
git clone https://github.com/hemanth8513/StackSquad.git
cd StackSquad
```

### 🔧 Setup Backend
```bash
cd backend
npm install
```

> Make sure MongoDB is running locally or in the cloud (Atlas).

Start backend server:
```bash
node server.js
```
Runs on: `http://localhost:5001`

---

### 🌐 Setup Frontend
```bash
cd ../frontend
npm install
```

Start frontend dev server:
```bash
npm start
```
Runs on: `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/members`       | Add a new member          |
| GET    | `/api/members`       | Get all members           |
| GET    | `/api/members/:id`   | Get member by ID          |

📂 Uploaded files can be accessed from:
```
http://localhost:5001/uploads/<filename>
```

---

## ▶️ How to Run the App

1. Make sure MongoDB is running
2. Open two terminals:
   - **Terminal 1 (Backend):**
     ```bash
     cd backend
     node server.js
     ```
   - **Terminal 2 (Frontend):**
     ```bash
     cd frontend
     npm start
     ```

3. Open browser at [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
StackSquad/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .gitignore
│
├── frontend/
│   ├── src/pages/
│   ├── App.js, App.css
│   ├── public/
│   └── .gitignore
│
├── README.md
└── .gitignore
```

---

## 📌 Notes

- `.gitignore` is used to exclude `node_modules/`, `uploads/`, and build folders
- The app is responsive and styled with a modern, clean UI
- Built by team **StackSquad**

---

> ✨ Happy building from team StackSquad!
