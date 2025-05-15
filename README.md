# 🎬 MERN Netflix Clone 

A full-stack Netflix clone built using the MERN stack: **MongoDB**, **Express.js**, **React**, and **Node.js**. This project simulates key features of the Netflix platform, including user authentication, movie browsing, adding/removing movies from a personal list, and more.

---

## 🚀 Features

- 🔐 User authentication (Sign Up & Sign In)
- 🎞️ View movies pulled from a MongoDB database
- 📺 Watch trailers (generic trailer used for all movies due to copyright reasons)
- ➕➖ Add or remove movies from a personal watchlist
- 🔍 Search movies by categories and genres
- 💾 MongoDB database integration
- 🧩 Clean separation between frontend (UI) and backend (API)

---

## 📦 Project Structure

MERN-netflix/
│
├── MERN-API/ # Backend - Express server & MongoDB integration
│
└── MERN-UI/ # Frontend - React application


---

## 🛠️ Getting Started 

### 1. Clone the repository

```bash

git clone https://github.com/midjanbegic/MERN-netflix.git
cd MERN-netflix

Backend Setup (API) 

cd MERN-API

# Install dependencies (if node_modules does not exist)
npm install

# (Optional) Install nodemon for development
npm install --save-dev nodemon

# Start the server
npm start

If everything is set up correctly, you should see this in the terminal:
Server started on port 5000
DB Connection Successful

Frontend Setup (UI)

cd ../MERN-UI

# Install dependencies (if node_modules does not exist)
npm install

# Start the React application
npm start

🌐 The React app will run on: http://localhost:3000

🧪 How to Use
Navigate to the app in your browser.

Click Sign In and create a new user account.

Once logged in, you can:

Browse available movies

Watch trailers (a single default video for all)

Add or remove movies from your "My List"

Use category filters to find specific genres

🧰 Technologies Used
Frontend
React.js

CSS

Backend
Node.js

Express.js

MongoDB

Mongoose

Additional Tools
JWT (Authentication)

Axios (API calls)

dotenv (Environment variables)

Nodemon (Optional for development)

📝 License
This project is open-source and intended for learning purposes only. Not for commercial use.

👤 Author
Made with ❤️ by Midjan Begić