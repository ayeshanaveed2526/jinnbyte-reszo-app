# Restaurant Management Dashboard (React + Vite)

This project is a modern restaurant management dashboard built with **React** and **Vite**. It features a clean UI, modular components, and essential management tools for restaurants and customers.

---

## Demo Login

- **Email:** ayesha@gmail.com  
- **Password:** 12345678

---

## Main Features & Components

- **Authentication**
  - Login (with email and password)
- **Navigation**
  - `Navbar` – Top navigation bar
  - `Sidebar` – Side navigation for dashboard sections
- **Dashboard Pages**
  - `RestaurantMang` – Restaurant management (list, view, delete)
  - `Cuisine` – Manage cuisines (add, edit, delete, search)
  - `BookingPage` – Bookings management with search and pagination
  - `HelpandSupport` – Help and support section
  - `Support` – Support form for customer and restaurant support
- **UI Elements**
  - `Table` – Reusable table component with custom columns, search, and pagination
- **Other**
  - Custom alert/confirmation modals for delete actions

---

## Installed Packages

- **react** – Core UI library
- **react-dom** – DOM bindings for React
- **vite** – Fast build tool and dev server
- **react-phone-input-2** – International phone number input
- **tailwindcss** – Utility-first CSS framework (if used)
- **eslint** – Linting for code quality

> _Install additional packages as needed for your project requirements._

---

## Project Structure

```
## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Table.jsx
│   ├── BookingPage.jsx
│   ├── Support.jsx
│   └── ... (other shared components)
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── RestaurantMang.jsx
│   ├── CustomerMang.jsx
│   ├── Cuisine.jsx
│   ├── HelpandSupport.jsx
│   └── ... (other pages)
├── App.jsx
├── main.jsx
└── ...
```

```

---

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Login using the demo credentials above.**

---

## Notes

- This project uses modular React components for easy maintenance and scalability.
- For production, consider adding TypeScript, advanced authentication, and backend integration.

---

**Enjoy managing your restaurant with this