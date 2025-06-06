## Enhanced Collaborative Project ##   
---   
**Tentative Project Structure - using Jest for testing**
```sh
project-root/
│── backend/                         # Node.js w/ ES6 modules + Express API
│   │   ├── models/                  # Mongoose schemas (reviews/appointments/etc)
│   │   ├── routes/                  # API routes (reviews/appointments/etc)
│   │   ├── updates/                 # Database updates
│   │   ├── database.js/             # Mongoose config for connection to MongoDB
│   │   ├── server.js                # Express server - entry to /routes
│   │   ├── .env                     # Environment variables
│   │   ├── .gitignore                   
│   │   ├── package-lock.json             
│   │   ├── package.json               
│   │   ├── node_modules           
│
│
├── tests/                           # Test folder
│   ├── controllers/                 # Tests for controller functions
│   │   └── userController.test.js
│   ├── routes/                      # Tests for API routes/endpoints
│   │   └── userRoutes.test.js
│   ├── models/                      # Tests for data models
│   │   └── userModel.test.js
│   ├── setup.js                     # Global setup for tests (aka- fixtures)
│   ├── package.json                 # Dependencies
│   ├── jest.config.js               # Jest config  
│
│
│── frontend-web/                    # React Web App
│   ├── src/
|   |   ├── assets                   # Images/Fonts/Styles/Scripts
│   │   ├── components/              # Reusable UI components
|   |   |   ├── Appointments.jsx
|   |   |   ├── MissionStatement.jsx
|   |   |   ├── Navbar.jsx
|   |   |   ├── Services.jsx
|   |   |   ├── Footer.jsx
│   │   ├── pages/                   # Page components
|   |   |   ├── HomePage.jsx
|   |   |   ├── AppointmentsPage.jsx
|   |   |   ├── ReviewsPage.jsx
│   │   ├── admin/                   # Admin Section
|   │   │   ├── components/          # Admin Components
|   |   |   │   ├── AdminNavbar.jsx 
|   |   |   │   ├── EmployeeCard.jsx    # EXAMPLE CRUD PURPOSE ONLY
|   |   |   │   ├── EmployeeForm.jsx    # EXAMPLE CRUD PURPOSE ONLY
|   |   |   ├── pages/               # Admin Pages
|   |   |   |   ├── AdminHomePage.jsx
│   │   ├── context/                 # Global state (React Context API)
│   │   ├── App.js                   # Main entry point
│   ├── tests/                       # Frontend tests
│   │   ├── components/              # Unit tests for UI components
│   │   ├── pages/                   # Page rendering tests
│   │   ├── setupTests.js            # Jest & RTL setup
│   ├── package.json                 # Dependencies
│   ├── jest.config.js               # Jest config  
│
│── .github/                         # GitHub Actions for CI/CD
│   ├── workflows/
│       ├── ci-cd.yml                # Automates testing & deployment
│
│── .gitignore                       # NEVER COMMIT .env file 
│
│── README.md                        # Project documentation
```
---  

**This project requires NPM and Node version 18 LTS or above ( https://nodejs.org/en/download )**  
```sh
# To see if you already have Node.js and NPM installed and to check the installed version
node -v
npm -v
```
---

**1. Clone repo**  
```sh
git clone <repository_url>
```


**2. Create .env file in backend root, and included these 2 lines:**
```sh
PORT=8000
URL=Your_username_and_password_mongodb_connection_string
```


**3. For frontend React, from the root of collab-sp25:**
```sh
cd frontend
npm install      # installs node modules as we don't upload those to Github
npm run dev
# React/Vite server on: http://localhost:5173/
```

 
**4. For backend Express, from the root of collab-sp25:**


```sh
cd backend
npm install
npm start
# Nodemon package listens to changes on server.js on: http://localhost:8000/
```



**5. Question about how to proceed:**
- Slack and Zoom --or-- Discord ??
- What kind of App ?? What API to use??
- MongoDB looks like it will play nicely with Firebase or Azure (SQL could be tricky ??)
- Jest is the community preferred unit testing solution (Anyone have another suggestion?)  
- Should we stay basic with Github Issues, or go with Jira ??  
- Tandem or individual components for React / React Native ??  
