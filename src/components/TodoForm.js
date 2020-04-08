import React from 'react';

//creates the form 
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
        <div className="form">
            <form onSubmit={event => this.props.onSubmit(event, this.state)}>
                <input type="text" onChange={this.onChange}/>
                <button>Add task</button>
            </form>
            <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </div>
    )
}
}

export default ToDoForm;