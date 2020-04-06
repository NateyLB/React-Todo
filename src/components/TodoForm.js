import React from 'react';
import { v4 as uuid } from 'uuid';

class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            task:"",
            id: "",
            completed:false
        }
    }

    onChange = event =>{
        this.setState({task: event.target.value});
    }

render(){
    return (
        <div>
            <form onSubmit={event => this.props.onSubmit(event, this.state)}>
                <input type="text" onChange={this.onChange}/>
                <button>Add task</button>
            </form>
        </div>
    )
}
}

export default ToDoForm;