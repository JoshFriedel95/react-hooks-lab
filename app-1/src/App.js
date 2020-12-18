import './App.css';
import React, {useState} from 'react'
import AddToDo from './components/AddToDo'
import List from './components/List'

function App() {
  const [todo, setTodo] = useState([])

  function addToDo(item){
    const newToDo = [...todo, item]
    setTodo(newToDo)
  }
  return (
    <div className="App">
      <AddToDo addToDo={addToDo} />
      <List list={todo} />
    </div>
  );
}

export default App;
