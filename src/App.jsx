import "../src/css/App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="body">
        <div className="App">
          <h1 className="title">Todo List</h1>
          <TodoList />
          <div className="brand">  &copy; Emir Güngör - 2024</div>
        </div>
      </div>
    </>
  );
}

export default App;
