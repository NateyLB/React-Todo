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

  submit = (event, item) => {
    event.preventDefault();
    const obj = {
      task: item.task,
      id: uuid(),
      completed: item.completed
    };
    this.setState({toDoList: [...this.state.toDoList, obj]})
  };

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

  clearCompleted = event => {
    console.log(this.state.toDoList.length)
    if(this.state.toDoList.length <= 0){
      return 
    }
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
