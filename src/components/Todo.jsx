import TodoInfo from "./todoInfo";
import TodoList from "./TodoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./searchTaskForm";
const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Купить хлеб", isDone:false},
    { id: "ttask-2", title: "Почитать мангу", isDone:true },
    { id: "task-3", title: "Поставить чайник", isDone:false },
  ];
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};
export default Todo;
