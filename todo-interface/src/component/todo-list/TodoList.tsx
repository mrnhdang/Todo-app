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
    <div className="flex flex-wrap w-3/4 min-h-screen align-middle items-start justify-center">
      {mockData.map((data) => (
        <div className="mr-10 mb-10" key={data.id}>
          <TodoCard
            id={data.id}
            title={data.title}
            note={data.note}
            createdAt={data.createdAt}
            status={data.status}
          />
        </div>
      ))}
    </div>
  );
};
export default TodoList;
