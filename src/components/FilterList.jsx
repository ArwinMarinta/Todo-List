import PropTypes from "prop-types";

const filterTask = ({ tasks, show }) => {
  if (show === "all") {
    return tasks;
  } else if (show === "complete") {
    return tasks.filter((tasks) => tasks.complete === true);
  } else if (show === "uncomplete") {
    return tasks.filter((tasks) => tasks.complete === false);
  }
};

filterTask.propTypes = {
  tasks: PropTypes.array,
  show: PropTypes.string,
};

export default filterTask;
