import React from 'react';
import ToDo from './Todo.js'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class ToDoList extends React.Component{
    render(){
        return(
            <div>
                {this.props.toDoList.map(element => {
                    return <ToDo item={element} toggleItem={this.props.toggleItem}/>
                })}
            </div>
        )
    }
}

export default ToDoList;