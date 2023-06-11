import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-[var(--dark-gray)] flex flex-col items-center justify-center w-full h-full [&>*]:m-10 [&>*]:p-5 text-2xl px-5">
      <div className="text-4xl md:text-5xl">todos</div>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
