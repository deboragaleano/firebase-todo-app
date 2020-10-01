import React, {useState} from 'react' 
import { Modal, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from './firebase'; 

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}))

function Todo({todo, removeTodo}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const updateTodo = () => {
        //update the todo with the new input text 
        db.collection('todos').doc(todo.id).set({
            text: input
        }, {merge: true})

        setOpen(false)
    }


    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}>
                
        <div className={classes.paper}>
            <h1>Modal Body</h1>
            <input 
                value={input} 
                placeholder={todo.text}
                onChange={e => setInput(e.target.value)}
            /> 
            <Button onClick={updateTodo}>Update todo</Button>
        </div>
        </Modal>

        <List>
            <ListItem key={todo.id}>
               <ListItemText primary={todo.text} />            
            </ListItem>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit" onClick={e => setOpen(true)}>
                    <EditIcon /> 
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
                    <DeleteIcon/> 
                </IconButton>
            </ListItemSecondaryAction>
        </List>
        </>
    )
}

export default Todo;
