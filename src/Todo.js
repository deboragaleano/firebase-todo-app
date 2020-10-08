import React, { useState } from 'react' 
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TodoEdit from './TodoEdit'; 

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//       },
// }))

function Todo({todo, removeTodo}) {
    // const classes = useStyles();
    // const [isEditing, toggle ] = useState()

    // const toggle = () => {

    // }


    return (
        <>
        <TodoEdit todo={todo} />
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
        </>
    )
}

export default Todo;

/* TODO 

- Add toggle 

*/

