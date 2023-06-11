const Tasks = () => {
  return ( 
    <div>
      <label className="hover:cursor-pointer pr-4" htmlFor="task-input">⌵</label>
      <input className="placeholder:opacity-70 outline-none" id="task-input" type="text" placeholder="What needs to be done?"></input>
    </div>
   );
}
 
export default Tasks;