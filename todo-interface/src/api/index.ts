import axios from "axios"

export const getTodoList = async () => {
 try {
  const todoList = await axios.get("http://localhost:8080/api/todos");
  const response = todoList.data; 
  return response;
 } catch (error) {
  console.log(error)
 }

}