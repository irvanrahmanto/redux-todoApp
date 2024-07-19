import { useSelector } from "react-redux"

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;
        return todos.filter((todo) => {
            const matchesFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchesFilter && matchesSearch
        });
    })

    console.log(">>>>>", filteredTodos)
  return (
    <ul>
        <li className="my-2 text-sm italic">All Your Notes here...</li>
        {filteredTodos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
        ))}
    </ul>
  )
}

export default TodoList