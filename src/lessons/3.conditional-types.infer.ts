const sumFunc = (a: number, b: number) => a + b;

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Result = GetReturnType<typeof sumFunc>;

const someObj = {
  name: "John",
  age: 30,
};

type Result2 = GetReturnType<typeof someObj>;

type GetReturnType2<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type Result3 = GetReturnType2<typeof someObj>;
type Result4 = GetReturnType2<typeof sumFunc>;

type ObjectType = {
  [P in any]: any;
};

type TransformValues<T extends ObjectType> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : T[K];
};

type MyObject = {
  name: string;
  getAge: () => number;
};

type Transformed = TransformValues<MyObject>;

type ReturnTypeOfPromise<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

async function fetchData() {
  return { name: "Alice", age: 123 };
}

type DataType = ReturnTypeOfPromise<ReturnType<typeof fetchData>>;

type Person = {
  "key-id": string;
  "key-name": string;
  "key-age": number;
  "keys-hobbies": string[];
};

type RemovePrefix<Obj extends { [K in any]: any }, Key extends string> = {
  [P in keyof Obj as P extends `${Key}${infer U}` ? U : P]: Obj[P];
};

type NewPerson = RemovePrefix<Person, "key-">;
