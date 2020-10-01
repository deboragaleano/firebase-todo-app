import React, {useState, useEffect} from 'react';
import firebase from 'firebase'; 
import './App.css';
import Todo from './Todo'; 
import {Grid,Typography, AppBar, Paper, Toolbar, Button, FormControl, InputLabel, Input, Container } from '@material-ui/core';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]) 
  const [input, setInput] = useState('')

  useEffect(() => {
    // orderBy here takes to params, one is the key to which you want to sort it by
    // the second is ascending or descending 
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // here we create an object to get the text and the id
      let todos = snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text}))
      setTodos(todos);
    })
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const deleteTodo = (id) => {
    // const updatedTodos = todos.filter(t => t.id !== id)
    // setTodos(updatedTodos)

    //With firebase you can just delete this like this!
    db.collection('todos').doc(id).delete()
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
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: '#fafafa'
    }} 
    elevation={0}>

    <AppBar color="secondary" position="static" style={{ height: '64px'}}>
        <Toolbar>
            <Typography color="inherit">Todos</Typography>
        </Toolbar>
    </AppBar>

      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} sm={4}>
          <form>
            <FormControl>
              <InputLabel><span role="img" aria-label="writing">✍🏽</span> Write a Todo</InputLabel>
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
              <Todo key={todo.id} todo={todo} removeTodo={deleteTodo}/>
            ))}
          </Container>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;

