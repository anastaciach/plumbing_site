import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { tasks = [] } = props;
  const hasTask = true;
  if (!hasTask) {
    return <div className="todo__empty-message"></div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          key={task.id}
          //{..task}
        />
      ))}
    </ul>
  );
};
export default TodoList;
