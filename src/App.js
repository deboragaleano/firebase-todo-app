import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import './App.css';
import Todo from './Todo'; 
import { Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')

  useEffect(() => {
    // orderBy here takes to params, one is the key to which you want to sort it by
    // the second is ascending or descending 
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      let todos = snapshot.docs.map(doc => doc.data())
      setTodos(todos); 
    })
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault(); 

    //this adds to the db automatically we don't need to setTodos again
    // and it lists out alphabetically :) 
    db.collection('todos').add({
      text: input,
      //when the data is stored, it will save the timestamp of that server 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('') //clearing the input locally
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

