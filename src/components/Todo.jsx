import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState();
  const handlingOnChangeInput = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleAddToDo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddToDoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddToDo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm());
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>

      {/* input text and btn */}
      <div className="flex item-center mb-4">
        <input
          value={newTodoText}
          onChange={handlingOnChangeInput}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-g-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddToDoClick}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline"
        >
          <FaPlus />
        </button>
      </div>

      {/* filter and search */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Add Todo"
            className="flex-grow p-2 border-b-2 border-g-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddToDoClick}
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
