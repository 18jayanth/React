## 🚦 What is React Router?

React Router is a library that lets you add navigation to your React apps. Instead of refreshing the whole page when you switch sections, it lets React handle navigation smoothly, making your app feel like a single-page app (SPA).

## 🔑 Core Concepts (80/20)

Here are the main things you’ll actually use most of the time:

BrowserRouter → Wraps your app and enables routing.

Routes & Route → Define paths (URLs) and which components to show.

Link / NavLink → Navigate between routes without refreshing the page.

useNavigate → Navigate programmatically (e.g., after a form submit).

useParams → Access dynamic route values (e.g., /user/:id).

useLocation → Get the current route info (like pathname, query).

Outlet + Layouts → Reusable layouts for nested routes.

👉 Learn these and you can build 90% of routing use cases.

## 🛠️ Applications of React Router

Multi-page navigation: Home, About, Contact pages.

Dynamic content: Show user profiles like /users/123.

Authentication flow: Redirect users if not logged in.

Nested routing: Dashboard with sub-sections (/dashboard/settings).

Layouts: Keep Navbar/Footer consistent across pages.

## 📘 Examples
### 1. Basic Setup
```
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

```
✅ Link prevents full page reload.
✅ Routes + Route decide what to render.

### 2. Dynamic Route with useParams
```
import { Routes, Route, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User Profile: {id}</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
}
```

👉 Going to /user/42 shows User Profile: 42.

### 3. Programmatic Navigation with useNavigate
```
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // logic here
    navigate("/dashboard"); // redirect after login
  }

  return <button onClick={handleLogin}>Login</button>;
}
```
### 4. Nested Routes + Layout with Outlet
```
import { Routes, Route, Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* where child routes render */}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="profile" element={<h2>Profile</h2>} />
        <Route path="settings" element={<h2>Settings</h2>} />
      </Route>
    </Routes>
  );
}

```
✅ URL /dashboard/profile → Shows Layout + Profile.
✅ Layout is reused.

## 🎯 80/20 Shortcut

Always wrap app in <BrowserRouter>.

Use <Routes> + <Route> for page structure.

Use <Link> for navigation.

Use useNavigate for redirects.

Use useParams for dynamic pages.

Use Outlet for nested layouts.

👉 These 6 things cover 80% of real-world routing needs.
