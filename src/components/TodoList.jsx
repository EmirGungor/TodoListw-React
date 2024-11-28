import { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Example", completed: false },
    { text: "Chill", completed: false },
  ]); //todolarımız bir obje ve bu objeler text ve completed adındaki değerleri içeriyor
  const [todoContent, setTodoContent] = useState("");

  const [filterText, setFilterText] = useState(""); // filtreleme için yeni state

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
    setTodos([...todos, { text: newTodo, completed: false }]); //yeni todo ekleyince completed değeri otomatik false oluşturuluyor newtodo değerimiz ise addTodo adlı fonksiyondan request adındaki değişken ile geliyor
  };

  const removeTodo = (todoText) => {
    setTodos([...todos.filter((todo) => todo.text !== todoText)]);
  };

  const editTodo = (index) => {
    const newTodo = prompt("Edit your todo:", todos[index].text);
    if (newTodo !== null && newTodo.trim() !== "") {
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

      <div className="filter"> {/*filtre için checkbox*/}
        <input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)} // Filtreleme metnini günceller
          className="filter-input"
          type="text"
          placeholder="Filter Todos"
        />
      </div>

      <div className="background">
        <div className="todo-list">
          {todos.length > 0 ? ( //turnery
            <div className="todos">
              {todos
                .filter((todo) =>
                  todo.text.toLowerCase().includes(filterText.toLowerCase())
                ) //filtreleme ile sadece bu değişiklik yapıldı mapleme işlemi yapılmadan öcne filtreleme işlemi yapılıp gelen sonuç map ile döndürülüyor

                .map((todo, index) => (
                  <div
                    className={`todoss ${todo.completed ? "completed" : ""}`}
                    key={index}
                  >
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(index)}
                    />
                    <span>{todo.text}</span>
                    <div className="icons">
                      <IoIosRemoveCircleOutline
                        onClick={() => removeTodo(todo.text)}
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
