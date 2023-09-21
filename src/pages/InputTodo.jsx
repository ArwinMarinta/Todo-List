import TodoInput from "../components/ToDoInput";
// import { useState } from "react";
import PropTypes from "prop-types";

function InputTodo({ text, task, setText, setTask }) {
  const handleInput = (e) => {
    e.preventDefault();

    if (text.trim()) {
      setTask([
        ...task,
        {
          id: task.length + 1,
          task: text,
          complete: false,
        },
      ]);
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
  setText: PropTypes.string,
  setTask: PropTypes.array,
};

export default InputTodo;
