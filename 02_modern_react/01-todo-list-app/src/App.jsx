import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompetedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true},
    { text: 'Make dinner', isCompleted: true }
  ]);
  const [incompletedTodos, setIncompetedTodos] = useState([
    { text: 'Paint the house', isCompleted: false }
  ]);


  return (
    <>
      <TodoList completedTodos={completedTodos} incompletedTodos={incompletedTodos}/>
    </>
  );
}

export default App
