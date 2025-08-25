type Todo = {
  id: string;
  name: string;
  completed: boolean;
  status: "Complete" | "Incomplete";
};

type NewTodo = Omit<Todo, "id">;
type NewTodo2 = Pick<Todo, "name" | "completed" | "status">;
