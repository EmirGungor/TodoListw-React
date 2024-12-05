/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo, priority) => {
    setTodos([...todos, { text: newTodo, completed: false, priority }]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Sadece verilen index dışındaki öğeleri tut
  };

  const editTodo = (index) => {
    const newTodo = prompt("Edit your todo:", todos[index].text);
    if (newTodo) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = newTodo;
      setTodos(updatedTodos);
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const getFilteredTodos = () => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <div className="background">
      <AddTodo addTodo={addTodo} />
      <FilterTodos filterText={filterText} setFilterText={setFilterText} />
      <div className="todo-list">
        {todos.length > 0 ? (
          getFilteredTodos().map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          ))
        ) : (
          <p className="empty-message">No todos available. Add a task!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
