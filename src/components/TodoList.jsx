/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const TodoList = () => {
  const [todos, setTodos] = useState(["Example", "Chill"]);
  const [todoContent, setTodoContent] = useState("");

  const addTodo = () => {
    //butona basınca çalışacak olan fonksiyon
    const request = todoContent;
    if (request !== "") {
      //Boş todo kontrolü
      createTodo(request);
      setTodoContent(""); //oluşturduktan sonra içeriyi sıfırlıyoruz
    } else alert("The todo cannot be empty");
  };

  const createTodo = (newTodo) => {
    //ekleme fonksiyonumuz bu fonksiyonu çağırır ve önceki todoların üzerine yeni todo eklenir
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoContent) => {
    setTodos([...todos.filter((todo) => todoContent !== todo)]);
  };

  const editTodo = (index) => {
    const newTodo = prompt("Edit your todo:", todos[index]);
    if (newTodo !== null && newTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = newTodo;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="content">
      <div className="create">
        <button onClick={addTodo} className="create-btn">
          Add Task
        </button>
        <input
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          className="create-input"
          type="text"
          placeholder="Enter Todo"
        />
      </div>
      <div className="background">
        <div className="todo-list">
          {todos.length > 0 ? (
            <div className="todos">
              {todos.map((todo, index) => (
                <div className="todoss" key={index}>
                  {todo}
                  <div className="icons">
                    <IoIosRemoveCircleOutline
                      onClick={() => removeTodo(todo)}
                    />
                    <CiEdit onClick={() => editTodo(index)} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-message">No todos available. Add a task!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
