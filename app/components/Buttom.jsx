'use client'
import React from "react";
import { useDispatch } from "react-redux";
import { addTaskToPage } from "../Redux/Reducer/todo-listReducer";

export default function Buttom({ name }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTaskToPage());
  };

  return (
    <button
      className="border-2 text-lg p-1 md:p-2.5 rounded-lg bg-blue-700 hover:bg-blue-500"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
