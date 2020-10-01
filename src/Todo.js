import React from 'react' 
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({todo, removeTodo}) {
    return (
        <List>
            <ListItem key={todo.id}>
               <ListItemText primary={todo.text} />            
            </ListItem>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <EditIcon /> 
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
                    <DeleteIcon/> 
                </IconButton>
            </ListItemSecondaryAction>
        </List>
    )
}

export default Todo;
