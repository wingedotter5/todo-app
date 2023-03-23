import { createContext } from "react";

export interface TodoItemInterface {
  title: string;
  completed: boolean;
  id: string;
}

export const defaultTodoContext: TodoItemInterface[] = [
  {
    title: "Complete online JavaScript course",
    completed: true,
    id: "95ae0955-ded5-4526-8253-64a77a6b493a",
  },
  {
    title: "Jog around the park 3x",
    completed: false,
    id: "bd108f77-cb6c-43ee-82f0-f5f9912f256f",
  },
  {
    title: "10 minutes meditation",
    completed: false,
    id: "ca04e571-aeb5-46a8-a959-f359c9e7399a",
  },
  {
    title: "Read for 1 hour",
    completed: false,
    id: "ad28bc18-140b-46e3-983b-b46f8b51d348",
  },
  {
    title: "Pick up groceries",
    completed: false,
    id: "c70194d3-fd00-413f-8763-f3f18f1ced81",
  },
  {
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: "2d8f5701-d3fd-4131-a11c-089bb9958e4a",
  },
];

export const TodoContext =
  createContext<TodoItemInterface[]>(defaultTodoContext);
