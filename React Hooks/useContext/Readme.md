# 🌱 What is useContext?

React has a Context API that lets you share data globally without passing props manually at every level (a problem called prop drilling).

The useContext hook allows you to consume (read/use) that shared data easily.

Think of it like:
👉 "A central store of data that all components can directly use without needing to pass props down multiple levels."

🛠️ 3 Simple Steps (80% use case)

Create Context
```
import { createContext } from "react";

const UserContext = createContext();


Provide Context (wrap your app or part of it)

import { useState } from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

export default function App() {
  const [user, setUser] = useState("Jayanth");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}
```

Consume Context (using useContext)
```
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user}</h1>
      <button onClick={() => setUser("AI Engineer")}>
        Change User
      </button>
    </div>
  );
}

```
✅ Now no need to pass user and setUser through props → Profile can access them directly.

📌 80/20 Applications of useContext
1. Avoid Prop Drilling

Instead of passing props through multiple nested components:

<App -> Parent -> Child -> GrandChild>


You just use context once.

2. Theme Management (Dark/Light Mode)
// ThemeContext.js
```
import { createContext } from "react";
export const ThemeContext = createContext();

// App.js
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

// Navbar.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      <h2>Navbar - {theme} mode</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```
3. Authentication (User Login/Logout)

You can keep the logged-in user in context and access it anywhere:

Login component updates setUser.

Dashboard or Profile component reads user.

4. Language / Localization

Switch between languages easily (en, fr, te).

5. Cart / Global State (for small apps)

Instead of Redux or Zustand, you can use useContext + useReducer to manage small global states like shopping carts.

⚡ Golden Rule (80/20 insight)

Use useContext for simple global states (theme, user, language, settings).

For complex state management (lots of data, multiple actions, performance issues), use Redux / Zustand / Recoil.

🧠 In Simple Words

useState → local state inside a component.

useContext → shared state across many components.

Think of it like WhatsApp Group: once a message (state) is posted in the group (context), everyone in the group (components) can see it instantly.
