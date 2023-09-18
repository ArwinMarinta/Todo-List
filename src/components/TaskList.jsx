import { useState } from "react";
import PropTypes from "prop-types";

export default function Tasks({ taksList, onChangeList, onDeleteList }) {
  return (
    <ul>
      {taksList.map((lists) => (
        <li key={lists.id}>
          <Task taksList={taksList} onChangeList={onChangeList} onDelete={onDeleteList} />
        </li>
      ))}
    </ul>
  );
}

function Task({ lists, onChange, onDelete }) {
  const [edite, setEdite] = useState(false);
  let taksContent;
  if (edite) {
    taksContent = (
      <>
        <input
          value={lists.textInput}
          onChange={(e) => {
            onChange({
              ...lists,
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
        {lists.textInput}
        <button onClick={() => setEdite(true)}>edite</button>
      </>
    );
  }
  return (
    <label>
      {taksContent}
      <input
        type="checkbox"
        checked={lists.done}
        onChange={(e) => {
          onChange({
            ...lists,
            Complate: e.target.checked,
          });
        }}
      />
      <button onClick={() => onDelete(lists.id)}>Delete</button>
    </label>
  );
}

Task.propTypes = {
  lists: PropTypes.array,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

Tasks.propTypes = {
  onChangeList: PropTypes.func,
  onDeleteList: PropTypes.func,
  taksList: PropTypes.array,
};
