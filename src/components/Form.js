import { useState } from "react";

export default function Form({ onAddTask }) {
  const [thingTodo, setThingTodo] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!thingTodo || !category) return;

    const newTask = {
      id: Date.now(),
      thingTodo,
      category,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    onAddTask(newTask);
  }
  return (
    <div className="form container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={thingTodo}
          onChange={(e) => setThingTodo(e.target.value)}
        />
        <button className="add-btn"> + Add Task</button>
        <div className="category">
          <p>
            Category:
            <span
              className={`work ${category === "work" ? "active" : ""}`}
              onClick={(e) => setCategory("work")}
            >
              💼 work
            </span>
            <span
              className={`personal ${category === "personal" ? "active" : ""}`}
              onClick={(e) => setCategory("personal")}
            >
              🏠 personal
            </span>
            <span
              className={`study ${category === "study" ? "active" : ""}`}
              onClick={(e) => setCategory("study")}
            >
              📚 study
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
