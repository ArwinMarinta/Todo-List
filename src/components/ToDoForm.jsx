// import { useState } from "react";
import Editing from "../assets/edit.svg";
import Delete from "../assets/delete2.svg";
import PropTypes from "prop-types";

const ToDoForm = ({ tasks, onDeleteTask, onToggleComplate }) => {
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   onDeleteTask(tasks.id);
  // };

  return (
    <>
      <form className=" flex flex-col mt-10 gap-4">
        {tasks.map((list) => (
          <div key={list.id}>
            <div className="border-2 h-10 flex justify-between items-center font-bold rounded-md">
              <h2
                className="ml-10"
                style={list.complete ? { textDecoration: "line-through" } : {}}
              >
                {list.task}
              </h2>

              <div className="mr-10 flex items-center gap-8">
                <input
                  type="checkbox"
                  className="h-14 cursor-pointer"
                  onChange={() => onToggleComplate(list.id)}
                  checked={list.complete}
                ></input>
                <button>
                  <img src={Editing} />
                </button>
                <button onClick={() => onDeleteTask(list.id)}>
                  <img className="h-6" src={Delete} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

ToDoForm.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onToggleComplate: PropTypes.func,
};

export default ToDoForm;
