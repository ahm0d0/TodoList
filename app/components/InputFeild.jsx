'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTextToTask } from "../Redux/Reducer/todo-listReducer";
import Buttom from "./Buttom";

export default function InputField() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.todo.text);

  const handleTextChange = (e) => {
    dispatch(addTextToTask(e.target.value));
  };

  return (
    <div className="flex justify-center items-center mt-10 md:mt-20">
      <input
        value={text}
        onChange={handleTextChange}
        className="text-xl md:text-2xl rounded-md outline-none text-black md:w-1/3 py-2 px-1 m-2"
        type="text"
        placeholder="type here..."
      />
      <Buttom name={"Add"} />
    </div>
  );
}
