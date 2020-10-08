import React, {useState} from 'react'
import {Button} from '@material-ui/core';
import db from './firebase'; 

export default function TodoEdit({todo}) {
    const [input, setInput] = useState();

    const updateTodo = () => {
        //update the todo with the new input text 
        db.collection('todos').doc(todo.id).set({
            text: input
        }, {merge: true})
    }

    return (
        <form>
            <input 
                value={input} 
                placeholder={todo.text}
                onChange={e => setInput(e.target.value)}
            /> 
            <Button onClick={updateTodo}>Update todo</Button>
        </form>
    )
}
