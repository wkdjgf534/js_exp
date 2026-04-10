import { useSelector } from "react-redux"
import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from "./selectors";

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompletedTodos = useSelector(getIncompleteTodos);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading
        ? <p>Loading...</p>
        : (
          <>
            <h3>Completed:</h3>
            {completedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
            <h3>Incomplete:</h3>
            {incompletedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </>
        )}
    </div>
  )
}