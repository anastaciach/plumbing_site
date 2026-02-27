import { useState } from "react";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./searchTaskForm";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Купить хлеб", isDone: false },
    { id: "ttask-2", title: "Почитать мангу", isDone: true },
    { id: "task-3", title: "Поставить чайник", isDone: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState();
  const deleteAllTask = () => {
    console.log("Удалить все задачи!");
    const isConfirmed = confirm("Are you shure you want to delete all??");
    if (isConfirmed) {
      setTasks([]);
    }
  };
  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id:${taskId}`);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const toogleTaskComplete = (taskId, isDone) => {
    console.log(`Задача: ${taskId} ${isDone ? "выполнена" : "не выполнена"}`);
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          return { ...task, isDone };
        }
        return task;
      }),
    );
  };
  const filterTasks = (query) => {
    console.log(`Поиск:${query}`);
  };
  const addTask = () => {
    console.log("Задача добавлена!");
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTask}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toogleTaskComplete}
      />
    </div>
  );
};
export default Todo;
