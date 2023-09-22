import { useEffect, useState } from "react";
import TodoForm from "../components/ToDoForm";
import TodoDelete from "../components/ToDoDelete";
import ToDoSearch from "../components/ToDoSearch";
import TodoList from "../components/ToDoList";
import PropTypes from "prop-types";

function LandingPage({ task, setTask }) {
  const [show, setShow] = useState(task);
  const [searchTask, setSearchTask] = useState("");

  //fungsi untuk melihat all, done dan todo
  const handlefilterTask = (showTodo) => {
    if (showTodo === "all") {
      setShow(filterTask);
    } else if (showTodo === "complete") {
      setShow(filterTask.filter((filters) => filters.complete === true));
    } else if (showTodo === "uncomplete") {
      setShow(filterTask.filter((filters) => filters.complete === false));
    }
  };

  //fungsi untuk mengambil data task untuk menampilkan show all, done, dan todo
  const filterTask = task.filter((tasks) => tasks.id);

  //untuk merender ulang useState show dari Task
  useEffect(() => {
    setShow(task);
  }, [task]);

  // fungsi untuk mengedite task yang sudah ada menggunakan promt
  const handleEdite = (id) => {
    const newText = prompt("Edit todo:", task[id - 1].task);
    if (newText !== null) {
      const updatedTodos = [...task];
      updatedTodos[id - 1].task = newText;
      setShow(updatedTodos);
      localStorage.setItem("Data", JSON.stringify(updatedTodos));
    }
  };

  //fungsi untuk menghapus semua Task yang ada
  const clearAllData = () => {
    const deletAll = window.confirm(
      "Apakah Kamu Yakin Ingin Menghapus Semua Data??"
    );
    if (deletAll) {
      setShow([]);
    }
  };

  //Fungsi untuk menghapus task yang sudah selesai
  const clearDoneTask = () => {
    const deleteDone = window.confirm(
      "apakah kamu yakin ingin menghapus semua Task yang sudah selesai?"
    );

    if (deleteDone) {
      const clearTask = task.filter((tasks) => {
        return tasks.complete !== true;
      });
      setTask(clearTask);
    }
  };

  //Fungsi untuk menghapus Task yang dusah di
  const deleteTask = (id) => {
    const deletes = task.find((tasks) => tasks.id === id);
    const alertDelete = window.confirm(
      `Apakah kamu yakin untuk menghapus: ${deletes.task}`
    );
    if (alertDelete) {
      const deleteItem = task.filter((tasks) => {
        return id !== tasks.id;
      });
      setTask(deleteItem);
    }
  };

  //Fungsi untuk mengatur compelete (true false) atua checkbox complete
  const handleToggle = (id) => {
    setTask((task) =>
      task.map((tasks) =>
        tasks.id === id ? { ...tasks, complete: !tasks.complete } : tasks
      )
    );
  };

  return (
    <>
      <div className=" mx-auto px-10 w-full ">
        <div className="mt-10">
          <ToDoSearch setSearchTask={setSearchTask} />
        </div>
        <div className="mt-10">
          <TodoList onFilterTask={handlefilterTask} />
        </div>
        <TodoForm
          onDeleteTask={deleteTask}
          tasks={show}
          onToggleComplate={handleToggle}
          onEditeTodo={handleEdite}
          searchTask={searchTask}
        />
        <div className="mt-10">
          <TodoDelete onClearAll={clearAllData} onClearDone={clearDoneTask} />
        </div>
      </div>
    </>
  );
}
LandingPage.propTypes = {
  task: PropTypes.array,
  setTask: PropTypes.func,
};
export default LandingPage;
