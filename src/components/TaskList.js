export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list container">
      <ul className="list-item">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onToggleTask, onDeleteTask }) {
  const categoryIcons = {
    work: "💼",
    personal: "🏠",
    study: "📚",
  };
  return (
    <li className={task.completed ? "completed" : ""}>
      <input
        type="checkbox"
        value={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span>
        <b>{task.thingTodo}</b>
      </span>
      <p>
        <span
          className={`${task.category} active`}
          style={{ fontSize: "13px", padding: "3px", borderRadius: "6px" }}
        >
          {categoryIcons[task.category]}
          {task.category}
        </span>
        - {task.date}
      </p>
      <span className="remove" onClick={() => onDeleteTask(task.id)}>
        ❌
      </span>
    </li>
  );
}
