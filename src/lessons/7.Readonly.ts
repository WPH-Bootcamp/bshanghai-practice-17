type Todo = {
  title: string;
  completed: boolean;
};

type FinalTodo = Readonly<Todo>;

const todo = {
  title: "Learn TypeScript",
  completed: false,
} as const;

Object.freeze(todo);
// just use Readonly to make it easier
