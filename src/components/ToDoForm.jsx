// import { useState } from "react";
import Editing from "../assets/edit.svg";
import Delete from "../assets/delete2.svg";
import PropTypes from "prop-types";

const ToDoForm = ({ tasks, onDeleteTask }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTask(tasks.id);
  };

  return (
    <>
      <form className=" flex flex-col mt-10 gap-4">
        {tasks.map((list) => (
          <div key={list.id}>
            <div className="border-2 h-10 flex justify-between items-center font-bold rounded-md">
              <div>
                <h2 className="ml-10">{list.task}</h2>
              </div>
              <div className="mr-10 flex items-center gap-8">
                <input type="checkbox" className="h-14"></input>
                <button>
                  <img src={Editing} />
                </button>
                <button onClick={handleDelete}>
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
};

export default ToDoForm;
