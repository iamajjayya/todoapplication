import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";


const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
        {isComplete ? (
          <FaCheckCircle className="w-7 h-10 text-orange-500" />
        ) : (
          <FaRegCircle className="w-7 h-10 text-gray-300 border-black" />
        )}
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>
          {text}
        </p>
      </div>
      <MdDelete className="w-7 h-7 text-red-500 cursor-pointer" onClick={() => deleteTodo(id)} />
    </div>
  );
};

export default TodoItems;
