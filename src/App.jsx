/* eslint-disable no-unused-vars */
import React from "react";
import TodoList from "./components/TodoList";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <TodoList />
      <div className="brand">&copy; 2024 - Emir Güngör</div>
    </div>
  );
}

export default App;
