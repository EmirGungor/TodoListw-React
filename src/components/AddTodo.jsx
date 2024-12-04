/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todoContent, setTodoContent] = useState("");
  const [priority, setPriority] = useState("low"); // Varsayılan öncelik: düşük

  const handleAdd = () => {
    if (todoContent.trim()) {
      addTodo(todoContent, priority);
      setTodoContent("");
      setPriority("low"); // Yeni görev sonrası öncelik varsayılan olarak sıfırlanır
    } else {
      alert("Please provide a valid todo.");
    }
  };

  return (
    <div className="create">
      <button onClick={handleAdd} className="create-btn">
        Add Task
      </button>
      <input
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        className="create-input"
        type="text"
        placeholder="Enter Todo"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
    </div>
  );
};

export default AddTodo;
