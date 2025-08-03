# 🏥 Healthcare Appointment Booking Interface

A simple, responsive React-based web application where users can:
- View doctors with their availability
- Check their specialization and schedule
- Book appointments easily

---

## 📦 Tech Stack / Tools & Libraries Used

| Tool/Library        | Purpose                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **React.js**        | Frontend framework for building the user interface                      |
| **JavaScript (ES6)**| Application logic                                                       |
| **React Router DOM**| SPA routing for navigating between pages     |
| **CSS**             | Styling (no Tailwind/Bootstrap — advanced hand-written CSS)             |
| **Vercel**          | Frontend deployment                                                     |
| **Git + GitHub**    | Version control and code hosting                                        |

---

## ✅ Features Implemented

- 🔍 **Landing Page:**  
  List of doctors with name, specialization, profile image, availability, and search filter.

- 👨‍⚕️ **Doctor Profile Page:**  
  Detailed bio, weekly schedule (in structured format), and direct appointment access.

- 📆 **Book Appointment:**  
  Simple form (name, email, datetime), with validation and confirmation UI.

- 💡 **Responsive Design:**  
  Mobile-first layout using media queries and scalable components.

- 📁 **Doctors Data (Static JSON):**  
  Doctor profiles, availability status, and schedules stored in `/public/doctors.json`.

---

## 🚧 If I Had More Time (Planned Improvements)

| Feature                      | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| 🧠 **State Management (Redux/Context)** | Centralized doctor & appointment data management                      |
| 📅 **Calendar Integration**  | Better slot booking using real calendar view                              |
| 🛠 **Backend + DB (MongoDB)**| Save appointment bookings persistently                                      |
| 👥 **User Authentication**   | Patients and admins can log in, view/manage their history                   |
| 📤 **Email Confirmation**    | Send appointment confirmation via email using NodeMailer or EmailJS         |
| 🗃 **Filter by Specialization/Time** | More advanced filtering on landing page                                 |
| 📱 **Progressive Web App**   | PWA support for offline + mobile installs                                   |

---

## 🧩 Challenges Faced & Solutions

| Challenge                              | Solution                                                                 |
|----------------------------------------|--------------------------------------------------------------------------|
| 🧪 Parsing doctor schedule data         | Used structured `{ day, time }` format and displayed conditionally        |
| 🗂 Managing static doctor data (JSON)   | Stored under `public/doctors.json` and loaded via `fetch()` in components |
| 🔁 Handling schedule visibility         | Conditional rendering based on presence and formatting of schedule array  |
| 🌐 Hosting + Routing on Vercel         | Used React Router with fallback route setup (`404.html`) for SPA 
---

## 🚀 Live Site (if deployed)
[https://health-app-pink.vercel.app/]

---
