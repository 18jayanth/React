import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch notes
  useEffect(() => {
    axios.get("http://localhost:5000/notes")
      .then(res => setNotes(res.data));
  }, []);

  // Add note
  const addNote = () => {
    axios.post("http://localhost:5000/notes", { title, content })
      .then(res => setNotes([...notes, res.data]));
    setTitle("");
    setContent("");
  };

  // Update note
  const updateNote = (id) => {
    const newTitle = prompt("Enter new title:");
    const newContent = prompt("Enter new content:");
    axios.put(`http://localhost:5000/notes/${id}`, { title: newTitle, content: newContent })
      .then(res => {
        setNotes(notes.map(note => note._id === id ? res.data : note));
      });
  };

  // Delete note
  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then(() => setNotes(notes.filter(note => note._id !== id)));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes App</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <b>{note.title}</b>: {note.content}
            <button onClick={() => updateNote(note._id)}>Edit</button>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
