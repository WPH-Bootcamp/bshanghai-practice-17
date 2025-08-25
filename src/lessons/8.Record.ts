type ObjectType<K extends keyof any, T> = {
  [P in K]: T;
};

type Person = ObjectType<"id" | "name" | "age", string>;

type PeopleGroupedByName = {
  [index: string]: Person[];
};

type PeopleGroupByName = Record<string, Person[]>;

type ThePerson = Record<"id" | "name" | "age", string>;

type Person2 = {
  [P in "firstName" | "lastName"]: string;
};

type Person3 = Record<"firstName" | "lastName", string>;

// You can use Record to make generic constraints
type AddPrefix<O extends Record<string, any>, K extends string> = {
  [P in keyof O as P extends string ? `${K}${P}` : P]: O[P];
};

type User = {
  firstName: string;
  lastName: string;
};

type UserWithPrefix = AddPrefix<User, "key-">;

type User2 = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

const User3: Record<string, any> = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
};

// This what would happen if you use Record<string, any>
// {
//   id: any;
//   firstName: any;
//   lastName: any;
//   age: any;
// }

// for making data model you should always prefer to use index signature
type User4 = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  [key: string]: any;
};

const user4: User4 = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

user4.hobby = "coding";
