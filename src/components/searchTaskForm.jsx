import Field from "./Field"

const searchTaskForm=()=>{
    return (
        <form className="todo__form">
          <Field
          className="todo__field"
            id="search-task"
          label="search-task"
          type="search"
          />
      </form>
    )
}
export default searchTaskForm
