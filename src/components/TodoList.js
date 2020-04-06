import React from 'react';
import ToDo from './Todo.js'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props =>{
        return(
            <div>
                {props.toDoList.map(element => {
                    return <ToDo item={element} toggleItem={props.toggleItem}/>
                })}
            </div>
        )
    }


export default ToDoList;