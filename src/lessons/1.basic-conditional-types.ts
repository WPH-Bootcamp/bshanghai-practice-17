type IsString<T> = T extends string ? true : false;

function checkIfString<T>(value: T): IsString<T> {
  return (typeof value === "string") as IsString<T>;
}

const result1 = checkIfString("hello");
const result2 = checkIfString(100);

function myFunction<T>(value: T) {
  return value;
}

type IsArray<T> = T extends any[] ? true : false;

function isArray<T>(value: T) {
  return Array.isArray(value) as IsArray<T>;
}

const result3 = isArray([1, 2, 3]);
const result4 = isArray("hello");

type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

function checkIfFunction<T>(value: T) {
  return (typeof value === "function") as IsFunction<T>;
}

const result5 = checkIfFunction(() => {});
const result6 = checkIfFunction("Hello");
