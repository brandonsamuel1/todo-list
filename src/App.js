import { useState } from 'react';
import './App.css';
import TodoItem from './components/todo-item.component';

function App() {
  const [inputText, setInputText] = useState("")
  const [todoList, setTodoList] = useState([])

  function handleChange(e) {
    const newTodo = e.target.value;
    setInputText(newTodo)
  }

  function addTodo() {
    setTodoList((prevList) => {
      return [...prevList, inputText]
    })
    setInputText("")
  }

  function deleteTodo(id) {
    setTodoList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              todo={todoItem}
              onChecked={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
