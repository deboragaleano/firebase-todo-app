import React from 'react' 
import { List, ListItem, ListItemText} from '@material-ui/core';

function Todo({todo}) {
    return (
        <List>
            <ListItem key={todo.id}>
               <ListItemText primary={todo.text} />            
            </ListItem>
        </List>
    )
}

export default Todo;
