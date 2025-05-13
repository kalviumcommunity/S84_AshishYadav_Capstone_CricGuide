# S84_AshishYadav_Capstone_CricGuide

# CRICKET GUIDE

**By Ashish Yadav**  
**SQUAD 84**  
**CHITKARA UNIVERSITY, HIMACHAL PRADESH**

---

## 📖 Overview

**CRICKET GUIDE** is an interactive MERN stack-based web platform designed to help users learn and master cricket skills based on their experience level—**Beginner**, **Intermediate**, or **Professional**.  
Users can choose specific areas of interest like **Batting**, **Bowling**, or **Fielding** and access expert-curated text guides, video lessons, and drills.  
The platform includes essential features like **login/signup**, **search**, and a **referral system**, with optional advanced functionalities like **dashboards** and **instructor interaction**.  
With modern technologies and a user-friendly design, CRICKET GUIDE aims to become the ultimate cricket learning destination.

---

## 🎯 User Skill Selection

Upon visiting the platform, users are asked to choose their current skill level:
- **Beginner**: Users who are new to cricket.
- **Intermediate**: Users who understand the basics but want to improve.
- **Professional**: Advanced users looking to polish or specialize their game.

---

## 🏏 Choose Area of Interest

After selecting the skill level, users choose the specific skill they want to work on:
- **Batting**: Techniques, grips, footwork, shot selection, and more.
- **Bowling**: Seam, spin, pace bowling variations, grip, and deliveries.
- **Fielding**: Catching, ground fielding, throwing, positioning, and agility drills.

---

## 📚 Content Delivery

Each combination (e.g., Beginner + Batting) leads to:
- **Textual guides**: Easy-to-follow expert-written tutorials.
- **Video lessons**: Professionally shot videos showing real-world demonstrations by coaches or players.
- **Tips & Drills**: Exercises and routines to practice daily.

---

## 📊 User Dashboard (Optional Advanced Feature)

- Track progress (completed lessons, skills learned)
- Bookmark content for revision
- Submit questions or interact with instructors (future expansion)

---

## 🛠️ Functionalities

- Login / Signup system
- Search functionality to find content quickly
- Referral Code system to refer and become a referred member

---

## ⚙️ Technologies & Languages Used

| Component      | Technology / Language | Purpose |
| -------------- | ---------------------- | ------- |
| Frontend       | React.js                | Build a fast, responsive user interface |
|                | HTML5                   | Structure of web pages |
|                | CSS3 / Tailwind CSS     | Styling of components, layouts, and responsiveness |
|                | JavaScript (ES6+)       | Logic, interactivity, DOM manipulation |
| Backend        | Node.js                 | JavaScript runtime to run server-side code |
|                | Express.js              | Handle API requests, routing, middleware |
| Database       | MongoDB                 | NoSQL database to store user data and content metadata |
|                | Mongoose                | ODM for MongoDB (schemas and validation) |
| Authentication | JWT (JSON Web Tokens)   | Secure login and authentication |
|                | Bcrypt                  | Password hashing for security |
| Media Hosting  | Cloudinary / Firebase   | Hosting videos and image assets |
| State Management | Redux / Context API (optional) | Manage global app state |
| Version Control| Git + GitHub            | Track code changes and collaboration |
| Deployment     | Render / Vercel / Netlify | Deploy frontend and backend |
| Others         | Postman                 | API testing and debugging |
|                | Figma / Canva (optional) | UI/UX design, wireframing |

---

## 🚀 Project Goal

To create an all-in-one cricket learning hub where users can learn skills from scratch or master advanced techniques through professional guidance—delivered interactively and systematically using modern web technologies.

---

## 📅 Weekly Work Distribution

### 🗓️ Week 1: Planning & Setup
- **Day 1-2**: Finalize features & design (UI/UX)  
  - Create basic wireframes (Figma/Canva)
  - Define user journeys (login → skill level → interest → content)

- **Day 3-4**: Set up GitHub repo & project structure  
  - Setup folders for frontend and backend
  - Initialize both with npm
  - Setup Tailwind CSS with React
  - Setup ESLint/Prettier (optional)

- **Day 5-7**: Setup MongoDB & Mongoose  
  - Create basic user schema
  - Connect backend to MongoDB
  - Test connection with Postman

---

### 🗓️ Week 2: Authentication System
- **Day 8-10**: Implement Signup/Login with JWT
  - Backend: /signup and /login routes
  - Use Bcrypt for password hashing
  - Issue JWT on successful login

- **Day 11-12**: Frontend: Signup/Login Forms
  - React forms using hooks
  - Handle errors and validations
  - Store token in localStorage

- **Day 13-14**: Protect Routes
  - Create PrivateRoute component
  - Allow access only if token exists

---

### 🗓️ Week 3: Core Flow – Skill Selection & Area of Interest
- **Day 15-17**: Build UI for Skill Level & Area of Interest
  - Dropdowns or cards for skill levels
  - Options for Batting, Bowling, Fielding

- **Day 18-19**: Save user selection to DB
  - Backend route: `/updateProfile`

- **Day 20-21**: Design and route to content page
  - Based on skill + interest

---

### 🗓️ Week 4: Content System
- **Day 22-23**: Create Content Schema
  - Title, type (text, video, tips), URL, category, skill level

- **Day 24-25**: Admin content upload system (optional)
  - Upload through Postman or basic form
  - Store media in Cloudinary/Firebase

- **Day 26-27**: Fetch and display content
  - Frontend: Use axios
  - Display guides, embedded videos, tips section

---

### 🗓️ Week 5: Extra Features + Polish
- **Day 28-29**: Implement Referral Code System
  - Generate unique code per user
  - Allow referral input at signup

- **Day 30-31**: Search Functionality
  - Search bar for filtering content
  - MongoDB text search or frontend filter

- **Day 32-33**: Build Basic User Dashboard
  - Show completed lessons, bookmarks
  - Allow bookmarking content

- **Day 34**: Testing and Debugging
  - Use Postman for API testing
  - Cross-browser check

- **Day 35**: Deployment
  - Frontend → Vercel/Netlify
  - Backend → Render
  - Connect frontend and backend via environment variables

---

Backend Deployment link: 

## 🙏 THANK YOU!