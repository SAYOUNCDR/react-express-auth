# MERN Authentication App

A simple full-stack authentication project using **React, Express, MongoDB Atlas, and Passport.js**.  
Frontend is deployed on **Vercel**, backend on **Railway**, and database hosted on **MongoDB Atlas**.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), Axios  
- **Backend:** Node.js, Express, Passport.js, Bcrypt  
- **Database:** MongoDB Atlas  
- **Deployment:** Railway (backend), Vercel (frontend)  

---

## 📂 Project Structure
```
    React-Node-Auth/
        │── client/ # React frontend (Vercel)
        │── server/ # Express backend (Railway)
        │── .gitignore
        │── README.md

```


---

## ⚡ Features
- User Registration with hashed passwords (bcrypt)  
- Login with **Passport Local Strategy** (no session, no cookies)  
- Simple dashboard that shows logged-in user’s name  
- Fully deployed using Railway (API) + Vercel (frontend)  
- MongoDB Atlas for cloud database storage  

---

## 🔧 Setup Instructions (Local)

### 1️⃣ Clone the repo
```bash


```


### 2️⃣ Backend Setup
- cd server
- npm install


> Create a .env file in server/
```
PORT=8000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

#### Start backend:
- npm start

### 3️⃣ Frontend Setup
- cd ../client
- npm install
- npm run dev


**The app should now run at:**

**Frontend:** http://localhost:5173

**Backend API:** http://localhost:8000

## 🌍 Deployment

### Backend (Railway)

1. Push code to GitHub

2. Connect server/ to Railway

3. Add environment variable MONGO_URL in Railway dashboard

### Frontend (Vercel)

1. Connect client/ to Vercel

2. Update API calls (axios.post("http://localhost:8000/...")) → replace with your Railway API URL

3. Deploy

🔗 Live Demo

Frontend (Vercel): https://your-vercel-url.vercel.app

Backend API (Railway): https://your-railway-url.up.railway.app

📜 License

This project is for learning purposes. Free to use and modify 🚀.


---

⚡ This will make your repo **look professional + easy to run**.  

👉 Want me to also give you a **badges section** (with React, Express, MongoDB, Railway, Vercel logos at the top of README) so it pops on GitHub?

