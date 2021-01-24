import React from "react";
import Todo from "./components/Todo"
import todoData from "./todosData"

class App extends React.Component
{
  constructor(){
    super()
    this.state = { todos : todoData }
  }
  render(){
  const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item} />)
  return(
    <div class="todo-list">
      {todoItems}
    </div>
  )
  }
}

export default App;