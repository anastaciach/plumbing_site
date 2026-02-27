import Field from "./Field";

const searchTaskForm = (props) => {
  const { onSearchInput } = props;
  return (
    <form className="todo__form"
    onSubmit={(event)=>{event.preventDefault()}}>
      <Field
        className="todo__field"
        id="search-task"
        label="search-task"
        type="search"
        onInput={() => {
          onSearchInput(event.target.value);
        }}
      />
    </form>
  );
};
export default searchTaskForm;
