// Partial<T>
// Required<T>
// Readonly<T>
// Pick<T, K> e.g: Pick<{id: number, fname: string, lname: string}, 'id' | 'lname'>
// Omit<T, K> e.g: Omit<{id: name, fname: string, lname: string}, 'fname'>
// Extract<T, U> e.g: Extract<{id: number, is18: boolean}, {id: number, age: number}> // returns "id"
// Exclude<T, U> opposite of Extract
// Record<K, T>
// NonNullable<T>

// MappedTypes

// Type Guards - 
   // in = e.g: const obj = {id: number, name: string}; if (id in obj) { doThis(); }
   // instanceof = checks an object belongs the class type
   // typeof = returns the type of an object; if (typeof obj === 'object) {}

//  Conditional Types e.g type NonNullable<T> = T extends null | undefined ? never: T;

function test<T, U extends keyof T>(fn: Exclude<T, U>): void {}

type MyPick<T, K extends keyof T> = {
  [P in keyof T]: T[P]
}

// The use case is to have a function to process
// an API contract to mandate field when its type is string

type MandateStringData<T> = {
  [P in keyof T] ?: P extends string ? never : T[P];
}

function logStringData<T>(data: MandateStringData<T>) {
  console.log(data);
}

interface FundAccount {
  type: string;
  name?: number;
}

const fund: FundAccount = {
  type: 'saving'
}

// logStringData(fund);

function fun(a: never) {}
