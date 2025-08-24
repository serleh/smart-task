export default function TaskInfo() {
  return (
    <div className="container info">
      <div className="total-task">
        <p>
          Total Tasks
          <span>
            🎯 <b>0</b>
          </span>
        </p>
      </div>
      <div className="completed-task">
        <p>Completed</p>
        <span>
          ✅ <b>0</b>
        </span>
      </div>
      <div className="success-rate">
        <p>
          Success Rate
          <span>
            💹 <b>0%</b>
          </span>
        </p>
      </div>
    </div>
  );
}
