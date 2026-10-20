# Student Life

A campus portal prototype with a React frontend and an Express/MongoDB backend for student accounts.

## What it does

**Frontend** (`student-life/frontend-main`, React + Vite + Tailwind CSS)
- Pages for Home, Events, Clubs, Resources and Study Groups, with client-side routing (React Router).
- Reusable Navbar, Footer and EventCard components.
- Content is static for now (for example, the study-group list is written into the page).

**Backend** (`student-life/backend-main`, Node.js + Express + MongoDB)
- `POST /api/auth/register` creates a student account. Passwords are hashed with bcrypt.
- `POST /api/auth/login` checks the password and returns a JSON Web Token (valid for 30 days).
- `GET /api/students` is a placeholder route.
- Uses Helmet for security headers and CORS for cross-origin requests.

The frontend does not call the backend yet; connecting the two is the next step.

## Run it locally

Backend:

```
cd student-life/backend-main
cp .env.example .env    # then fill in MONGO_URI and JWT_SECRET
npm install
npm start               # http://localhost:5000
```

Frontend:

```
cd student-life/frontend-main
npm install
npm run dev
```

## Tech stack

React, Vite, Tailwind CSS, React Router, Node.js, Express, MongoDB (Mongoose), bcrypt, JSON Web Tokens, Helmet.
