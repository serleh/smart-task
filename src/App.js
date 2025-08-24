import Header from "./components/Header";
import Form from "./components/Form";
import TaskInfo from "./components/TaskInfo";
import Search from "./components/Search";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const initialList = [
  {
    id: 1,
    name: "Read book",
    category: "📚 study",
    completed: false,
    date: Date.now(),
  },
  {
    id: 2,
    name: "Cook Beans",
    category: "🏠 personal",
    completed: false,
    date: Date.now(),
  },
];
export default function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <TaskInfo />
      <Search />
      <TaskFilter />
      <TaskList tasks={initialList} />
    </div>
  );
}
