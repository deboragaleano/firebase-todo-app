import React, {useState} from 'react';
import {FirestoreCollection, FirestoreDocument} from 'react-firestore';
import './App.css';
import Todo from './Todo'; 
import { Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';


function App() {
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')


  // then the app loads, we need to listen to the db
  // and fetch new todos as they get added/removed 
  // useEffect(() => {
  //   db.collection('fir-todo-react-app').onSnapshot(snapshot => {
  //     setTodos(snapshot.docs.map(doc => doc.data().text))
  //   })
  // }, [])

  
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
      <FirestoreCollection
        path='todos'
        render={({isLoading, data}) => {
          return isLoading ? (
            <p>is loading</p>
          ): (
            <Container>
              {data.map(todo => (
                <Todo key={todo.id} text={todo.text}/>))}
            </Container>
          )
        }}
      />
    </div>
  );
}

export default App;
