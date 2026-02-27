import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./searchTaskForm";
const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Купить хлеб", isDone: false },
    { id: "ttask-2", title: "Почитать мангу", isDone: true },
    { id: "task-3", title: "Поставить чайник", isDone: false },
  ];
  const deleteAllTask = () => {
    console.log("Удалить все задачи!");
  };
  const deleteTask=(taskId)=>{
    console.log(`Удаляем задачу с id:${taskId}`);
  }
  const toogleTaskComplete=(taskId,isDone)=>{
    console.log(`Задача: ${taskId} ${isDone? 'выполнена':'не выполнена'}`)
  };
  const filterTasks=(query)=>{
    console.log(`Поиск:${query}`);
  }
  const addTask=()=>{
    console.log('Задача добавлена!');
  }
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask}/>
      <SearchTaskForm 
      onSearchInput={filterTasks}/>
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTask}
      />
      <TodoList 
      tasks={tasks}
      onDeleteTaskButtonClick={deleteTask} 
      onTaskCompleteChange={toogleTaskComplete}/>
    </div>
  );
};
export default Todo;
