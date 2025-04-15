# 🏆 SkillHub

SkillHub is a full-stack web application for tracking learning goals and progress.  
Built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**, it follows a clean, modular architecture with separation of concerns for scalability and maintainability.

---

## 🚀 Features

- User registration and login
- Frontend built with HTML/CSS/Bootstrap
- Backend API using Express and Mongoose
- MongoDB integration with Mongoose
- Modular structure with controllers, services, models, and routes

---

## 🧠 Architecture

SkillHub follows a **modular, layered architecture**, inspired by **MVC** and clean architecture principles.

| Layer          | Responsibility                                  |
|----------------|--------------------------------------------------|
| Entry Point    | `server.js` – Starts the server and DB connection |
| App Layer      | `app.js` – Sets up Express and routers           |
| Routes Layer   | `routes/` – Defines HTTP routes                  |
| Controllers    | `controllers/` – Handles request logic           |
| Services       | `services/` – Handles business and DB logic      |
| Models         | `models/` – Defines Mongoose schemas             |
| Database Layer | `db/db.js` – Connects to MongoDB                 |
| Public         | `public/` – Static HTML, CSS, and JS             |

---

