# 📝 Task Manager App (React)

This is a **Task Manager application** built using **React 19** as part of an assignment.  
The project focuses on task management with drag-and-drop interaction, animations, theming, and persistent storage.

---

## 🚀 Features

- Add, delete, and mark tasks as completed
- Filter tasks (All / Completed / Pending)
- Drag-and-drop interaction for tasks
- CSS animations for adding and deleting tasks
- Light / Dark mode toggle
- Data persistence using localStorage
- Responsive UI

---

## 🛠 Tech Stack

- React 19
- Context API
- Custom `useLocalStorage` Hook
- @hello-pangea/dnd
- CSS (Transitions & Keyframes)

---

## 🔀 Drag and Drop

The assignment mentioned using `react-beautiful-dnd`.  
However, **react-beautiful-dnd is not compatible with React 19 and causes installation and runtime issues**.

So, I used:

```
@hello-pangea/dnd
```

This library has the **same API and behavior** as `react-beautiful-dnd` and works properly with **React 19**.

---

## 🎨 Animations

- Fade-in animation when a task is added
- Fade-out animation when a task is deleted
- Implemented using CSS keyframes
- Does not interfere with drag-and-drop functionality

---

## 🌗 Theme Support

- Light and Dark mode available
- Theme affects:
  - Body
  - Task cards
  - Buttons
  - Inputs and text areas
- Theme state managed using Context API
- Theme preference persisted to localStorage

---

## 💾 Data Persistence

- Tasks are stored in browser localStorage
- Theme preference is stored in browser localStorage
- Data remains after page refresh
- Implemented using a custom `useLocalStorage` hook

---

## 📁 Project Structure

```
src/
│
├── components/
│ ├── Home.jsx
│ └── TaskList.jsx
│
├── context/
│ └── GlobalContext.jsx
│
├── hooks/
│ └── useLocalStorage.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## ✅ Assignment Coverage

- Task CRUD functionality ✔
- Drag-and-drop implementation ✔
- Animations ✔
- Theme toggle ✔
- Filtering ✔
- Persistent storage ✔

---

## 📌 Note

`@hello-pangea/dnd` was used instead of `react-beautiful-dnd` due to **React 19 compatibility issues**, while keeping the required drag-and-drop functionality intact.
