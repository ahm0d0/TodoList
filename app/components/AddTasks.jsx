'use client';

import React, { useState , useEffect , Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, editButtonText } from '../Redux/Reducer/todo-listReducer';
import { motion, AnimatePresence } from 'framer-motion';





export default function AddTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks) || []; // استخدام مصفوفة افتراضية
  const colors = useSelector((state) => state.colors);
  console.log(colors);

  const [editingText, setEditingText] = useState({});
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));  
  };

  const handleEdit = (task) => {
    const updatedText = editingText[task.id] !== undefined ? editingText[task.id] : task.text;
    dispatch(editTask({ text: updatedText, id: task.id, cheak: !task.cheak }));
  };

  const handleButton = (task) => {
    setEditingText((prev) => ({ ...prev, [task.id]: task.text }));
    dispatch(editButtonText({ id: task.id, cheak: !task.cheak }));
  };

  const handleClickTask = (taskId) => {
    if (selectedTaskIds.includes(taskId)) {
      setSelectedTaskIds(selectedTaskIds.filter(id => id !== taskId));
    } else {
      setSelectedTaskIds([...selectedTaskIds, taskId]);
    }
  };

  const handleColorIdAndBg = (task) => {
    if (selectedTaskIds.includes(task.id)) {
      if (colors.gray) {
        return "text-xl md:text-2xl cursor-pointer rounded-md bg-gray-400 text-black w-48 md:w-1/4 py-2 px-1 m-1 truncate text-wrap overflow-auto outline-none";
      }
    }
    return "text-xl md:text-2xl cursor-pointer rounded-md bg-white text-black w-48 md:w-1/4 py-2 px-1 m-1 truncate text-wrap overflow-auto outline-none";
  };


  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const myTasks = tasks.length > 0 ? (
    tasks.map((task) => (
      <motion.div 
        key={task.id}
        className="flex justify-center items-center mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <input
          onClick={() => handleClickTask(task.id)}
          readOnly={task.cheak}
          className={handleColorIdAndBg(task)}
          value={task.cheak ? task.text : editingText[task.id] || ""}
          onChange={(e) => setEditingText((prev) => ({ ...prev, [task.id]: e.target.value }))}
        />
        <AnimatePresence initial={false}>
          {task.cheak ? (
            <motion.button
              key="edit"
              onClick={() => handleButton(task)}
              className="border-2 text-lg p-1 md:p-2 mr-1 rounded-lg bg-gray-700 hover:bg-gray-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              Edit
            </motion.button>
          ) : (
            <motion.button
              key="confirm"
              onClick={() => handleEdit(task)}
              className="border-2 text-lg p-1 md:p-2 mr-1 rounded-lg bg-green-700 hover:bg-green-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Confirm
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => handleDelete(task.id)}
          className="border-2 text-lg p-1 md:p-2 rounded-lg bg-red-700 hover:bg-red-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          Delete
        </motion.button>
      </motion.div>
    ))
  ) : (
  <p className='flex justify-center'>no Tasks avaliabel</p>
    
  );
  
  return (
    <div>
      {isClient?myTasks:<p className='flex justify-center'>no Tasks avaliabel</p>}
    </div>
  );
}
