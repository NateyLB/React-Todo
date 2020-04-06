import React from 'react';
import ToDoForm from "./components/TodoForm.js"
import ToDoList from "./components/TodoList.js"
import { v4 as uuid } from 'uuid';

const seed = 
[]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state= { toDoList: seed}
  };
  //handles submit for the task
  submit = (event, item) => {
    event.preventDefault();
    const obj = {
      task: item.task,
      id: uuid(),
      completed: item.completed
    };
    this.setState({toDoList: [...this.state.toDoList, obj]})
  };
  //toggles checked state
  toggleItem = itemId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        // if the item matches the id that was clicked
        if (itemId === item.id) {
          // change purchased to true
          // return the item
          return {
            ...item,
            completed: !item.completed
          };
        }
        // if the item does NOT match the id that was clicked
        // just return the item, unchanged
        return item;
      })
    });
  };
  //filters already completed tasks
  clearCompleted = event => {
    this.setState({
      toDoList: this.state.toDoList.filter(item =>{
        return item.completed === false
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm onSubmit={this.submit} clearCompleted={this.clearCompleted}/>
        <ToDoList toDoList={this.state.toDoList} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
