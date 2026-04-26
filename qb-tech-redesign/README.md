# QB Tech Redesign – Full-Stack Portfolio
A modern, high-performance web application redesign for QB Tech, featuring a React frontend and an Express/Node.js backend with MySQL integration.

## 🚀 Overview
This project was developed as part of a professional internship preparation to demonstrate expertise in building scalable, data-driven applications. It features a complete career management system where job listings are served dynamically from a database, and a lead-generation contact system.



## 🛠 Tech Stack
* **Frontend:** React 18, Vite, Tailwind CSS (Modern, responsive UI/UX)
* **Backend:** Node.js, Express.js (RESTful API architecture)
* **Database:** MySQL with Sequelize ORM (Relational data management)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Data Fetching:** Axios with Vite Proxy configuration

## ✨ Key Features
* **Dynamic Careers Page:** Job openings are fetched from a MySQL database, ensuring real-time updates without code changes.
* **Contact & Lead Management:** Functional contact form that validates user input and persists inquiries to the backend.
* **Defensive Design:** Implemented robust error handling and loading states to ensure a seamless user experience even during network delays.
* **Automated Seeding:** Custom database scripts to quickly populate the environment with professional mock data.

## Clone the repository
```bash
git clone https://github.com/Chanalizain/QB-redesign.git
cd qb-tech-redesign
```
## ⚙️ Setup Instructions

Replace your current setup section with this:

2. Backend Setup (Server)

```Bash
cd server
npm install
```
Environment Configuration: Create a .env file in the server folder and add your MySQL credentials:

```Code snippet
DB_NAME=qb_tech_db
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
PORT=5000
```
Initialize the Database: Run the sync script to create the necessary tables in your MySQL instance:

```Bash
npm run db:sync
```
Seed Sample Data: Populate the Jobs table with professional mock data so the Careers page is active immediately:

```Bash
npm run db:seed
```
Start the API:
```bash
npm run dev
```

## 📂 Project Structure
```text
├── client/                # React + Vite application
│   ├── src/components/    # Modular UI components
│   └── src/services/      # API communication layer (Axios)
├── server/                # Express.js backend
│   ├── config/            # Database connection logic (Sequelize)
│   ├── controllers/       # Business logic & API handlers
│   ├── models/            # Sequelize database schemas
│   ├── routes/            # API endpoint definitions
│   ├── sync.js            # Table initialization script
│   └── seed.js            # Sample data injection script
└── README.md
```
