import React from 'react'
import './Todo.css'
//creates the task with checkbox

class ToDo extends React.Component {
    render(){
        return(
            <div>
                <form className="toDo">
                    <h4>{this.props.item.task}</h4>
                    <input   onClick={() => this.props.toggleItem(this.props.item.id)} type="checkbox" checked={this.props.item.completed} />
                </form>
            </div>
        )
    }
}

export default ToDo;