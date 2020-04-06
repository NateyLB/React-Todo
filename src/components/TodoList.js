import React from 'react';
import ToDo from './Todo.js'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class ToDoList extends React.Component{
    constructor(){
        super()
        this.state ={}
    }

    render(){
        return(
            <div>
                {this.props.toDoList.map(element => {
                    console.log(element)
                    return <ToDo item={element} toggleItem={this.props.toggleItem}/>
                })}

                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default ToDoList;