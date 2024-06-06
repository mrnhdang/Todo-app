import { Status, TodoCardType } from "@/interface";
import axios from "axios";

export const getTodoList = async () => {
  try {
    const todoList = await axios.get(process.env.BACKEND_URL+"/api/todos");
    const response = todoList.data;
    const returnedData: TodoCardType[] = response.map((todo: any) => ({
      id: todo._id,
      title: todo.title,
      note: todo.note || "",
      createdAt: todo.createdDate,
      status: todo.status as Status,
    }));
    return returnedData;
  } catch (error) {
    console.log(error);
  }
};

export const createNewTodo = async (payload: {
  title: string;
  note: string;
  status: Status;
}) => {
  try {
    const todoList = await axios.post(
      process.env.BACKEND_URL+ "/api/todo/new",
      payload
    );
    const response = todoList.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoCard = async (todoCardId: string) => {
  try {
    const todoList = await axios.delete(
      process.env.BACKEND_URL+  "/api/todo/" + todoCardId
    );
    const response = todoList.data;
    return response.message;
  } catch (error) {
    console.log(error);
  }
};
