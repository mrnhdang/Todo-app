import TodoCard from "@/component/todo-card/TodoCard";
import { TodoCardProps } from "@/interface";
const mockData: TodoCardProps[] = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, Bread, Cheese, Eggs, Vegetables, Fruits",
    createdAt: "2024-06-01T10:30:00Z",
    status: "pending",
  },
  {
    id: "2",
    title: "Finish project report",
    description:
      "Complete the final draft of the project report and send it to the supervisor.",
    createdAt: "2024-06-01T12:00:00Z",
    status: "in progress",
  },
  {
    id: "3",
    title: "Schedule dentist appointment",
    description:
      "Call the dental clinic and schedule an appointment for a routine check-up.",
    createdAt: "2024-06-01T09:00:00Z",
    status: "completed",
  },
  {
    id: "4",
    title: "Plan birthday party",
    description:
      "Organize a birthday party, including venue, guest list, and catering.",
    createdAt: "2024-06-02T08:45:00Z",
    status: "pending",
  },
  {
    id: "5",
    title: "Exercise routine",
    description: "Go for a run and complete a 30-minute workout session.",
    createdAt: "2024-06-01T07:00:00Z",
    status: "completed",
  },
  {
    id: "6",
    title: "Read a book",
    description: "Finish reading the current book and start a new one.",
    createdAt: "2024-06-01T15:00:00Z",
    status: "in progress",
  },
  {
    id: "7",
    title: "Organize workspace",
    description: "Clean and organize the home office workspace.",
    createdAt: "2024-06-01T11:00:00Z",
    status: "pending",
  },
  {
    id: "8",
    title: "Prepare presentation",
    description:
      "Create slides for the upcoming presentation and practice the speech.",
    createdAt: "2024-06-01T14:30:00Z",
    status: "in progress",
  },
  {
    id: "9",
    title: "Grocery shopping",
    description: "Restock pantry with essential items and some snacks.",
    createdAt: "2024-06-01T16:00:00Z",
    status: "completed",
  },
  {
    id: "10",
    title: "Update website",
    description: "Revise and update content on the company website.",
    createdAt: "2024-06-01T18:00:00Z",
    status: "pending",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-screen bg-gradient-to-r from-pink-200 space-y-10">
      <div className="flex flex-col align-middle justify-center items-center min-w-screen min-h-[400px]">
        <h1 className="font-mono font-bold text-3xl">
          Welcome to Todo Application
        </h1>
      </div>

      <h1>Here is your card list:</h1>
      <div className="flex flex-wrap w-3/4 min-h-screen items-center justify-center">
        {mockData.map((data) => (
          <div className="mr-10 mb-10" key={data.id}>
            <TodoCard
              id={data.id}
              title={data.title}
              description={data.description}
              createdAt={data.createdAt}
              status={data.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
