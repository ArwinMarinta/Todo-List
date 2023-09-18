// import { useState } from "react";
import Buku from "../assets/book.svg";
import PropTypes from "prop-types";

const ToDoInput = ({ onAddTask, onChange }) => {
  return (
    <>
      <h1 className="mb-10 font-bold text-3xl">Todo Input</h1>
      <div id="ToDoInput" className="border-2 border-abu">
        <form
          onSubmit={onAddTask}
          className="flex flex-col gap-4 mx-auto px-10 py-10 w-full"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-row h-10 ">
            <img src={Buku} className="h-10 bg-blue-600 "></img>
            <input
              onChange={onChange}
              placeholder="  Input/Edit"
              // onChange={(e) => setText(e.target.value)}
              className="bg-white w-full rounded-r-md border-2 border-border"
            />
          </div>
          <button
            className="bg-blue-600 rounded-md w-full h-10 text-white border-abu border-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

ToDoInput.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // setText: PropTypes.string,
};

export default ToDoInput;
