import TodoListItem from "./TodoListItem"

export default function TodoList({ completedTodos, incompletedTodos }) {
  return (
    <div>
      <h1>My Todos</h1>
      <p>New todo form will be here..</p>
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
       {incompletedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  )
}