import Header from "./components/Header";
import Form from "./components/Form";
import TaskInfo from "./components/TaskInfo";
import Search from "./components/Search";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { useState } from "react";

// const initialList = [
//   {
//     id: 1,
//     name: "Read book",
//     category: "📚 study",
//     completed: false,
//     date: Date.now(),
//   },
//   {
//     id: 2,
//     name: "Cook Beans",
//     category: "🏠 personal",
//     completed: false,
//     date: Date.now(),
//   },
// ];
export default function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <div className="container">
      <Header />
      <Form onAddTask={handleAddTasks} />
      <TaskInfo tasks={tasks} />
      <Search />
      <TaskFilter />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
