import { RiTodoLine } from "react-icons/ri";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [todolist, setTodolist] = useState(localStorage.getItem("todos") ?  JSON.parse(localStorage.getItem("todos")) : "");
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
     localStorage.setItem("todos",JSON.stringify(todolist))
  }, [todolist]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <RiTodoLine className="w-8 h-8" />
        <h1 className="text-3xl font-semibold">To-do List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add to List"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-400 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          type="button"
        >
          ADD +
        </button>
      </div>
      <div>
        {todolist.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
