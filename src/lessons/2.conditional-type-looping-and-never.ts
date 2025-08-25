type ResultWithNever = "a" | "b" | never | "c" | "d";

type ExcludeFromUnion<T, U> = T extends U ? never : T;

type Result = ExcludeFromUnion<"a" | "b" | "c" | "d", "a">;
// Distributive:
// ('a' extends 'a' ? never : 'a') |
// ('b' extends 'a' ? never : 'b') |
// ('c' extends 'a' ? never : 'c') |
// ('d' extends 'a' ? never : 'd')
//
// Result: never | 'b' | 'c' | 'd' -> 'b' | 'c' | 'd'

type Check<T> = T extends "a" ? "yes" : "no";
type Result2 = Check<"a" | "b" | "c" | "d">;

type ChooseProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Person = {
  name: string;
  age: number;
  country: string;
  hobby: string;
  friends: string[];
};

type PersonName = ChooseProperties<Person, "name" | "age" | "hobby">;

type RemoveProperties<T, K extends keyof T> = {
  [P in ExcludeFromUnion<keyof T, K>]: T[P];
};

type PersonWithoutFriends = RemoveProperties<Person, "friends" | "country">;
