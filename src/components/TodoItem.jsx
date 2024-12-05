/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const TodoItem = ({ todo, index, toggleComplete, removeTodo, editTodo }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "low":
        return "#90ee90"; // Yeşil
      case "medium":
        return "#ffeb3b"; // Sarı
      case "high":
        return "#ff7f7f"; // Kırmızı
      default:
        return "white";
    }
  };

  return (
    <div
      className={`todoss ${todo.completed ? "completed" : ""}`}
      style={{ backgroundColor: getPriorityColor(todo.priority) }}
    >
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      <span>{todo.text}</span>
      <div className="icons">
        <IoIosRemoveCircleOutline onClick={() => removeTodo(index)} />

        <CiEdit
          onClick={() => {
            if (!todo.completed) editTodo(index); // Sadece tamamlanmamış görevlerde çalışır
          }}
          style={{
            color: todo.completed ? "gray" : "black", // Tamamlanmışsa gri renk
            pointerEvents: todo.completed ? "none" : "auto", // Tamamlanmışsa tıklanamaz
            opacity: todo.completed ? 0.5 : 1, // Tamamlanmışsa şeffaflık
            cursor: todo.completed ? "not-allowed" : "pointer", // İmleç durumu
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
