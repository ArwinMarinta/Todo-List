import TodoInput from "../components/ToDoInput";
import PropTypes from "prop-types";

function InputTodo({ text, task, setText, setTask }) {
  const handleInput = (e) => {
    e.preventDefault();

    alert(`${text} telah di tambahkan`);

    if (text.trim()) {
      const newInput = () => {
        setTask([
          ...task,
          {
            id: task.length + 1,
            task: text,
            complete: false,
          },
        ]);
      };
      setText(newInput);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <TodoInput
        onAddTask={handleInput}
        onChange={handleChange}
        setText={setText}
      />
    </>
  );
}

InputTodo.propTypes = {
  text: PropTypes.string,
  task: PropTypes.array,
  setText: PropTypes.func,
  setTask: PropTypes.func,
};

export default InputTodo;
