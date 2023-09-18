export const ToDoList = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-4 font-bold text-3xl">Todo List</h1>
        <div className="flex flex-row gap-10">
          <button className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2" type="submit">
            Add New Task
          </button>
          <button className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2" type="submit">
            Add New Task
          </button>
          <button className="bg-blue-600 rounded-md w-[40%] h-10 text-white border-abu border-2" type="submit">
            Add New Task
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};
