export default function Form() {
  return (
    <div className="form container">
      <form>
        <input type="text" placeholder="What needs to be done?" />
        <button className="add-btn"> + Add Task</button>
        <div className="category">
          <p>
            Category:
            <span className="work">💼 work</span>
            <span className="personal">🏠 personal</span>
            <span className="study">📚 study</span>
          </p>
        </div>
      </form>
    </div>
  );
}
