import TodoModal from "@/component/new-todo/TodoModal";
import TodoList from "@/component/todo-list/TodoList";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-screen bg-gradient-to-r from-pink-200 space-y-10">
      <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-[400px] space-y-7">
        <ThumbUpOutlinedIcon />
        <h1 className="font-mono font-bold text-3xl">
          Welcome to Todo Application
        </h1>
        <div className="flex space-x-10">
          <div className="bg-white shadow-xl text-xl p-5 rounded-xl space-x-1">
            You can create your note here <TodoModal />
          </div>
          <div className="bg-white shadow-xl text-xl p-5 rounded-xl space-x-1">
            You can manage your to do list
          </div>
        </div>
      </div>

      <h1 className="font-bold text-xl font-mono">Here is your card list:</h1>
      <TodoList />
    </div>
  );
}
