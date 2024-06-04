"use client";
import TodoCard from "../todo-card/TodoCard";
import React, { useEffect, useState } from "react";
import { getTodoList } from "@/api";
import { TodoCardType } from "@/interface";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import TodoModal from "@/component/new-todo/TodoModal";
import { Alert, CircularProgress } from "@mui/material";

const TodoList = () => {
  const [uiState, setUiState] = useState<{
    success?: string;
    error?: string;
    loading: boolean;
  }>({ success: undefined, error: undefined, loading: false });
  const [todos, setTodos] = useState<TodoCardType[] | undefined>([]);
  const getData = async () => {
    try {
      setUiState({ loading: true });
      const data = await getTodoList();
      setTodos(data);
      setUiState({ loading: false });
    } catch (error) {
      setUiState({ loading: false, error: error as string });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-screen bg-gradient-to-r from-pink-200 space-y-10">
      <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-[400px] space-y-7">
        <ThumbUpOutlinedIcon />
        <h1 className="font-mono font-bold text-3xl text-center">
          Welcome to Todo Application
        </h1>
        <div className="space-x-10 flex sm:block">
          <div className="bg-white shadow-xl text-xl p-5 rounded-xl space-x-1 font-semibold flex items-center">
            You can create your note here
          </div>
          <div className="bg-white shadow-xl text-xl p-5 rounded-xl space-x-1 font-semibold flex items-center">
            You can manage your to do list
          </div>
        </div>
        <TodoModal setUiState={setUiState} getData={getData} />
      </div>

      <h1 className="font-bold text-xl font-mono">Here is your card list:</h1>
      {uiState?.loading && <CircularProgress />}
      {uiState?.error && <Alert severity="error">{uiState?.error}</Alert>}
      {uiState?.success && <Alert severity="success">{uiState?.success}</Alert>}
      <div className="flex flex-wrap w-3/4 align align-middle justify-center items-start">
        {todos && todos?.length <= 0 && (
          <div className="text-2xl font-mono font-bolds">
            LET CREATE YOUR TODO CARD.
          </div>
        )}
        {todos?.map((data) => (
          <TodoCard
            key={data.id}
            id={data.id}
            title={data.title}
            note={data.note}
            createdAt={data.createdAt}
            status={data.status}
            getData={getData}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
