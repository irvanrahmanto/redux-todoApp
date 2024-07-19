import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos || [];
    const filter = state.filter || "ALL";
    const searchTerm = state.searchTerm || "";

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";
      const matchesSearch = typeof todo.text === "string" && todo.text.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  });

  /** print the store */
  //   console.log(">>>>>", filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
