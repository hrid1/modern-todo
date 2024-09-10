import React from "react";
import Tag from "../Tag/Tag";

const TaskForm = () => {
  return (
    <div>
      <form className="md:w-2/5 mx-auto justify-center">
        <input className="w-full border p-2 mb-4 rounded-md" type="text" placeholder="Enter Your Task" />

        <div className="flex gap-6 justify-between items-center">
          <div className="flex gap-4">
            
            <Tag tagName="HTML"></Tag>
            <Tag tagName={"CSS"}></Tag>
            <Tag tagName={"JavaScript"}></Tag>
            <Tag tagName={"React"}></Tag>
           
          
          </div>

          <div className="flex gap-2 ">
            <select className="border rounded-md px-2" name="" id="">
              <option value="default">+ Add Task</option>
              <option>To do</option>
              <option>Doing</option>
              <option>Done</option>
            </select>

            <button className="px-4 py-3 bg-violet-600 text-white font-semibold text-lg rounded-md">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
