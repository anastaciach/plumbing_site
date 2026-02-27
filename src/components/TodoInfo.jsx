// document.querySelector(".todo__delete-all-button")
// document.addEventListener('click',()=>console.log("Клик!"))
const todoInfo = (props) => {
  const { 
    total,
     done,
     onDeleteAllButtonClick,
     } = props;
  const hasTask = total > 0;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done: {done} from {total}
      </div>
      {hasTask && (
        <button 
        className="todo__delete-all-button" 
        type="button"
        onClick={onDeleteAllButtonClick}
>
          Delete all
        </button>
      )}
    </div>
  );
};
export default todoInfo;
