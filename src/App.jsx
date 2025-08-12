import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { text: input.trim(), status: "pending", id: Date.now() }
    ]);
    setInput("");
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === "pending" ? "done" : "pending" }
        : todo
    ));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Todo App</h1>
      <form onSubmit={handleAdd} style={{ marginBottom: 16 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a todo..."
          style={{ padding: 8, width: 200 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 8 }}>
          Add
        </button>
      </form>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: 8,
              padding: 8,
              background: "#fafafa",
              border: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: todo.status === "done" ? "line-through" : "none",
              color: todo.status === "done" ? "#999" : "#222"
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => toggleStatus(todo.id)}>
              {todo.status === "pending" ? "Mark Done" : "Mark Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
