import TodoInfo from "./todoInfo"
import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
const Todo=()=>{
    return (
<div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm/>
      <searchTaskForm/>
      <TodoInfo/>
      <TodoList/>
    </div>
    )
}
export default Todo;