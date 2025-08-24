export default function TaskList({ tasks, onToggleTask }) {
  return (
    <div className="task-list container">
      <ul className="list-item">
        {tasks.map((task) => (
          <Task task={task} key={task.id} onToggleTask={onToggleTask} />
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onToggleTask }) {
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
      <span>{task.thingTodo}</span>
      <p>
        {categoryIcons[task.category]} {task.category} - {task.date}
      </p>
    </li>
  );
}
