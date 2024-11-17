'use client';
import { useState } from 'react';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';

export default function Todo() {
      const [taskList, setTaskList] = useState<string[]>([]);
      const [taskName, setTaskName] = useState('');
  
      const handleAddTask = () => {
            if (taskName.trim() === '') return alert('Task cannot be empty!');
            if (taskList.includes(taskName.trim())) return alert('Task already exists!');
            setTaskList([...taskList, taskName.trim()]);
            setTaskName('');
        };

      const handleDeleteTask = (index: number) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    return (
          <div className="grid place-items-center h-screen bg-gradient-to-b from-slate-500 to-slate-700 text-white">
              <div className="w-11/12 md:w-2/3 lg:w-1/2 p-6 bg-gray-800 rounded-lg shadow-xl space-y-8">
                  <h1 className="text-3xl font-bold text-center">To-Do List</h1>
                  <div className="flex space-x-4">
                    <input
                          type="text"
                          placeholder="Add a new task..."
                          value={taskName}
                          onChange={handleTaskName}
                          className="flex-1 px-4 py-2 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-400"
                      />
                      <button
                          onClick={handleAddTask}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                      >
                          <FaPlusCircle />
                 <span>Add Task</span>
                      </button>
                  </div>
                  {taskList.length === 0 ? (
                        <p className="text-center text-gray-400">No tasks added yet. Start by adding a new task!</p>
                    ) : (
                    <ul className="space-y-4">
                              {taskList.map((task, index) => (
                                    <li
                                        key={index}
                                className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg"
                            >
                                <span>{task}</span>
                                <button
                                    onClick={() => handleDeleteTask(index)}
                                    className="text-red-500 hover:text-red-600"
                                >
                                    <FaTrashAlt />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}





