import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo'; 
import { Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      let todos = snapshot.docs.map(doc => doc.data())
      setTodos(todos); 
    })
  }, [todos])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault(); 
    setTodos([...todos, input]); 
    setInput(''); 
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl>
          <InputLabel> <span> 🖌 </span> Write a Todo</InputLabel>
          <Input 
              value={input}
              onChange={handleChange} 
        /> 
        </FormControl>

        <Button 
          type="submit"
          color="primary" 
          variant='contained' 
          disabled={!input}
          onClick={addTodo}>Add todo
        </Button>
      </form>

      <Container >
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </Container>
    </div>
  )
}

export default App;

