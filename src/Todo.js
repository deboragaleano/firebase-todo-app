import React from 'react' 
import { List, ListItem, ListItemText} from '@material-ui/core';

function Todo({text}) {
    return (
        <List>
            <ListItem >
               <ListItemText primary={text} />            
            </ListItem>
        </List>
    )
}

export default Todo
