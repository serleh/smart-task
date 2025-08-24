export default function TaskInfo({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const successRate = Math.round((completedTasks / totalTasks) * 100);
  console.log(totalTasks);
  return (
    <div className="container info">
      <div className="total-task">
        <p>
          Total Tasks
          <span>
            🎯 <b>{totalTasks}</b>
          </span>
        </p>
      </div>
      <div className="completed-task">
        <p>Completed</p>
        <span>
          ✅ <b>{completedTasks}</b>
        </span>
      </div>
      <div className="success-rate">
        <p>
          Success Rate
          <span>
            💹 <b>{successRate ? successRate : "0"}%</b>
          </span>
        </p>
      </div>
    </div>
  );
}
