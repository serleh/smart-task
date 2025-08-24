export default function TaskList({ tasks }) {
  return (
    <div className="task-list container">
      <ul className="list-item">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

function Task({ task }) {
  return (
    <li>
      <span>{task.name}</span>
      <p>
        {task.category} {task.date}
      </p>
    </li>
  );
}
