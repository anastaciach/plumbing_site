import Button from "./Button";
import Field from "./Field";
const AddTaskForm=()=>{
    return (
        <form className="todo__form">
        <Field
        className="todo__field"
        label="New Task Title"
        id="news-task"
        />
        <Button type="submit">Add</Button>
   </form>
    )
}
export default  AddTaskForm;
