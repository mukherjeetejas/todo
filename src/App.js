import React from "react";
import Todo from "./components/Todo"
import todoData from "./todosData"

function App(){
  const todoItems = todoData.map(item => <Todo key={item.id} item={item} />)
  return(
    <div class="todo-list">
      {todoItems}
    </div>
  )
}

export default App;