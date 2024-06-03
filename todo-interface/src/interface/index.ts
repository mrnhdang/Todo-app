// To do item: Id,title, description, createdAt, status(TODO, INPROGRESS, DONE)
export interface TodoCardProps {
 id: string;
 title: string;
 note: string;
 createdAt: string;
 status: Status;
}

export enum Status{
 TODO = 'TODO',
  INPROGRESS = 'INPROGRESS',
  DONE = 'DONE'
}