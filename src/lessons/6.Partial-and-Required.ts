type Todo = {
  title: string;
  completed: boolean;
};

type PartialTodo = Partial<Todo>;
type RequiredTodo = Required<PartialTodo>;

type Person = {
  id?: string;
  name: string;
  hobby: string;
  address?: {
    street?: string;
  };
};

type RequiredPerson = Required<Person>;

// we want to make the copy of Person but the id property is required

type NewPerson = Required<Pick<Person, "id">> & Omit<Person, "id">;

type RequiredByKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

type NewPerson2 = RequiredByKeys<Person, "id">;

type RequiredByKey<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]-?: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

type RequiredPersonById = RequiredByKey<Person, "id">;

type CustomOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type Car = {
  id: string;
  name: string;
  price: number;
};

type CarWithoutId = CustomOmit<Car, "id">;
