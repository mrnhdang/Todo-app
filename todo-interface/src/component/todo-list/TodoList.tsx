"use client";
import { mockData } from "@/utils";
import TodoCard from "../todo-card/TodoCard";
import React, { useEffect } from "react";
import { getTodoList } from "@/api";

const TodoList = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await getTodoList();
    };
    getData();
  }, []);
  return (
    <div className="flex flex-wrap align align-middle justify-center items-start">
      {mockData.map((data) => (
        // <div key={data.id}>
        <TodoCard
          key={data.id}
          id={data.id}
          title={data.title}
          note={data.note}
          createdAt={data.createdAt}
          status={data.status}
        />
        // </div>
      ))}
    </div>
  );
};
export default TodoList;
