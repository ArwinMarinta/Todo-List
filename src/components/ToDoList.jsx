import { PropTypes } from "prop-types";

const ToDoList = ({ onFilterTask }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-4 font-bold text-3xl">Todo List</h1>
        <div className="flex flex-row gap-10">
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={() => onFilterTask("all")}
          >
            All
          </button>
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={() => onFilterTask("complete")}
          >
            Done
          </button>
          <button
            className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2"
            onClick={() => onFilterTask("uncomplete")}
          >
            Todo
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

ToDoList.propTypes = {
  // onFilterDone: PropTypes.array,
  // onFilterAll: PropTypes.array,
  // onFilterTodo: PropTypes.array,
  onFilterTask: PropTypes.func,
  onChangeTask: PropTypes.func,
  handleChangeFilter: PropTypes.func,
};

export default ToDoList;
