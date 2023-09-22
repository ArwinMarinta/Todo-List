import PropTypes from "prop-types";

const ToDoDelete = ({ onClearAll, onClearDone }) => {
  return (
    <>
      <div className="flex flex-row gap-20">
        <button
          className="text-white border-2 border-abu bg-red-600 w-[50%] h-10 rounded-md font-bold"
          onClick={onClearDone}
        >
          Delete Done Task
        </button>
        <button
          className="text-white border-2 border-abu bg-red-600 w-[50%] h-10 rounded-md font-bold"
          onClick={onClearAll}
        >
          Delete All Task
        </button>
      </div>
    </>
  );
};

ToDoDelete.propTypes = {
  onClearAll: PropTypes.func,
  onClearDone: PropTypes.func,
};

export default ToDoDelete;
