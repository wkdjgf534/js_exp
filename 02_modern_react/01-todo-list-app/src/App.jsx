import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompetedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true},
    { text: 'Make dinner', isCompleted: true }
  ]);
  const [incompleteTodos, setIncompeteTodos] = useState([
    { text: 'Paint the house', isCompleted: false }
  ]);

  function markTodoAsComplete(text) {
    setIncompeteTodos(incompleteTodos.filter(t => t.text !== text));
    setCompetedTodos([...completedTodos, {...incompleteTodos.find(t => t.text === text), isCompleted: true}]);
  }

  function deleteTodo(text) {
    setCompetedTodos(completedTodos.filter(t => t.text !== text));
  }

  function createTodo(text) {
    setIncompeteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
        onCompletedClicked={markTodoAsComplete}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo} />
    </>
  );
}

export default App
