import { Status, TodoCardProps } from "@/interface";

export const mockData: TodoCardProps[] = [
 {
   id: "1",
   title: "Buy groceries",
   note: "Milk, Bread, Cheese, Eggs, Vegetables, Fruits",
   createdAt: "2024-06-01T10:30:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "2",
   title: "Finish project report",
   note:
     "Complete the final draft of the project report and send it to the supervisor.",
   createdAt: "2024-06-01T12:00:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "3",
   title: "Schedule dentist appointment",
   note:
     "Call the dental clinic and schedule an appointment for a routine check-up.",
   createdAt: "2024-06-01T09:00:00Z",
   status: Status.DONE,
 },
 {
   id: "4",
   title: "Plan birthday party",
   note:
     "Organize a birthday party, including venue, guest list, and catering.",
   createdAt: "2024-06-02T08:45:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "5",
   title: "Exercise routine",
   note: "Go for a run and complete a 30-minute workout session.",
   createdAt: "2024-06-01T07:00:00Z",
   status: Status.DONE,
 },
 {
   id: "6",
   title: "Read a book",
   note: "Finish reading the current book and start a new one.",
   createdAt: "2024-06-01T15:00:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "7",
   title: "Organize workspace",
   note: "Clean and organize the home office workspace.",
   createdAt: "2024-06-01T11:00:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "8",
   title: "Prepare presentation",
   note:
     "Create slides for the upcoming presentation and practice the speech.",
   createdAt: "2024-06-01T14:30:00Z",
   status: Status.INPROGRESS,
 },
 {
   id: "9",
   title: "Grocery shopping",
   note: "Restock pantry with essential items and some snacks.",
   createdAt: "2024-06-01T16:00:00Z",
   status: Status.TODO,
 },
 {
   id: "10",
   title: "Update website",
   note: "Revise and update content on the company website.",
   createdAt: "2024-06-01T18:00:00Z",
   status: Status.INPROGRESS,
 },
];
