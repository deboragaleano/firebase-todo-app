import React, {useState} from 'react';
import {Firestore} from 'react-firestore';
import './App.css';
import Todo from './Todo'; 
import { Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTodo = (e) => {
    // let collectionRef = firestore.collection('col');
    // collectionRef.add({foo: 'bar'}).then(documentReference => {
    //   console.log(`Added document with name: ${documentReference.id}`);
    // });

    e.preventDefault(); 
    setTodos([...todos, input]); 
    setInput(''); 
  }

  return (
    <Firestore 
      render={({firestore}) => {
        let query = firestore.collection('todos')

        query.get().then(snapshot => {
          let todos = snapshot.docs.map(doc => doc.data())
          setTodos(todos)
      })
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
  }}
    />
  )
}

export default App;

