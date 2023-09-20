import { useState } from "react";
import PropTypes from "prop-types";

// export default function Tasks({ taksList, onChangeList, onDeleteList }) {
//   return (
//     <ul>
//       {taksList.map((lists) => (
//         <li key={lists.id}>
//           <Task
//             taksList={taksList}
//             onChangeList={onChangeList}
//             onDelete={onDeleteList}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

const Task = ({ task, onChange }) => {
  const [edite, setEdite] = useState(false);
  let taksContent;
  if (edite) {
    taksContent = (
      <>
        <input
          value={task.textInput}
          onChange={(e) => {
            onChange({
              ...task,
              textInput: e.target.value,
            });
          }}
        />
        <button onClick={() => setEdite(false)}>Save</button>
      </>
    );
  } else {
    taksContent = (
      <>
        {task.textInput}
        <button onClick={() => setEdite(true)}>edite</button>
      </>
    );
  }
  return <label>{taksContent}</label>;
};

Task.propTypes = {
  task: PropTypes.array,
  onChange: PropTypes.func,
};

Task.propTypes = {
  onChangeList: PropTypes.func,
  onDeleteList: PropTypes.func,
  taksList: PropTypes.array,
};

export default Task;
