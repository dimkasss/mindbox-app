import Tasks from "./Tasks";

const TaskList = () => {
  return (
    <div className="bg-white shadow-lg w-full md:w-3/5 [&>*]:p-2">
      <Tasks></Tasks>
      <div>bottom</div>
    </div>
  );
};

export default TaskList;
