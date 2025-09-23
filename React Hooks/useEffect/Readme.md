# 🔑 What is useEffect?

useEffect lets you run side effects in a React component.
Side effects = code that runs outside the render process (fetching data, subscriptions, timers, DOM manipulation, etc.).

Syntax:

```
useEffect(() => {
// side effect code
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

🎯 The 80/20 Core Uses of useEffect
## 1. Run code on component mount (like componentDidMount)

👉 Most common: fetch data when component loads.
```javascript
 import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty dependency = run once

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```


✅ Application: fetching data, analytics tracking, initial API calls.

## 2. Run code when state/props change (reactive updates)

👉 Trigger effect only when a variable changes.
```
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // runs whenever `count` changes

  return <button onClick={() => setCount(count + 1)}>+</button>;
}
```

✅ Application: syncing state with localStorage, calling an API when a filter changes.

## 3. Cleanup effects (like componentWillUnmount)

👉 Remove subscriptions, clear timers, avoid memory leaks.
```javacript
import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);

    return () => clearInterval(interval); // cleanup when unmounts
  }, []);

  return <h1>{time}</h1>;
}
```


✅ Application: clearing intervals, unsubscribing from WebSocket, cleaning event listeners.

## 4. Avoid unnecessary re-renders

👉 Without dependencies, effect runs on every render (rarely needed).

```useEffect(() => {
  console.log("I run after every render");
});
```


✅ Application: debugging or very rare continuous syncing.

## 📌 Summary (80/20 Takeaway)

If you master these 3 cases, you’ll cover 80%+ of real-world uses of useEffect:

Mount only → fetch data once.

When deps change → run logic reactively.

Cleanup → stop intervals, unsubscribe.

## ⚡ Quick Application Ideas:

Fetch weather data when page loads.

Save form data to localStorage whenever user types.

Start/stop a timer or WebSocket connection.



## ⚡ useEffect Cheat Sheet (80/20)
<br/>

|Pattern|	Code	|When it Runs	|Typical Use|
|-------|------|------------|------------|
|Run once (on mount)|	jsx useEffect(() => { console.log("mounted"); }, []);|	Only first render|	Fetch data, analytics|
|Run on every render|	jsx useEffect(() => { console.log("rendered"); });|	After every render	|Rarely used, debugging
|Run when dependency changes	|jsx useEffect(() => { console.log("count:", count); }, [count]);|	First render + whenever count changes|	Reacting to state/prop changes, API calls
|Cleanup on unmount / before re-run	|jsx useEffect(() => { const id = setInterval(() => console.log("tick"), 1000); return () => clearInterval(id); }, []);	|Cleans up when component unmounts or before effect runs again	|Clear intervals, remove event listeners, unsubscribe from APIs

<br/>

## 🧠 Quick Rules to Remember

[] (empty deps) → run once.

[var] → run when var changes.

No deps → run every render.

Return a function → cleanup logic.

