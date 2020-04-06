import React from 'react'
import './Todo.css'

class ToDo extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){

        return(
            <div>
                <form class="toDo">
                    <h4>{this.props.item.task}</h4>
                    <input   onClick={() => this.props.toggleItem(this.props.item.id)} type="checkbox" checked={this.props.item.completed} />
                </form>
            </div>
        )
    }
}

export default ToDo;