// Understanding of the MappedTypes
// Ref: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

// object literal type, here 'text' is key or property of a type
type StringButton = { text: string }; 
const okTextBtn: StringButton = { text: 'OK' };

// object literal type, here "['text']" - string-index key
type NumberButton = { ['text']: number };
const oneBtn: NumberButton = { text: 1 };

// union types
type ChoiceButton = { [K in 'ok' | 'cancel']: boolean };
const choiceBtn: ChoiceButton = { ok: true, cancel: false };
const userChoice = choiceBtn.cancel;

// Extracting Properties of a type Point
interface Point { x: number, y: number };
type PointProps = keyof Point; // 'x' | 'y'
const props: PointProps = 'x'; // can have either one of 'x' | 'y'

// Putting it together
interface Person {
  name: string;
  age: number;
  email: string;
}

// Create a readonly person by adding the readonly modifier to the key.
type ReadOnlyPerson<Person> = { readonly [K in keyof Person]: Person[K] };
const sriram: Person = {
  name: 'sriram',
  age: 23,
  email: 'sriram@mail.com'
}
sriram.age = 24; // OK

const readOnlySriram: ReadOnlyPerson<Person> = sriram;
// readOnlySriram.age = 32; // Compiler error!!!

// So, generic implementation as follows
type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
}

// ------------------
type vehicle1 = {
  [name: string]: string;
  ['model']: string;
  [year: number]: string;
}

// both are eq.

type vehicle2 = {
  [name: string]: string;
  [year: number]: string;
  model: string;  // Compare vehicle1 & vehicle2 and see "model" is simple type here
}

// New example
// type PageSetting = 'url' | 'content'
// type Crawler = {
//   [P in PageSetting]: string;
// }

interface WebPage {
  url: string;
  content: string;
  size: number;
}

type NullableWebPage = { [K in keyof WebPage]: WebPage[K] | null };
// eq. as below
// type NullableWebPage = {
//   url: string | null;
//   content: string | null;
//   size: number | null;
// }

// type NullableWebPage = { [K in keyof WebPage]: K | null };
// eq. as below
// type NullableWebPage = {
//   url: "url" | null;
//   content: "content" | null;
//   size: "size" | null;
// }

type Crawler<T> = {
  [P in keyof T]: T[P];
}

const google: Crawler<WebPage> = {
  url: 'google.com',
  content: 'html content of the page.',
  size: 323
}
  

// Option 1:-
// type DogInfo = {
//   name: string;
// } & Record<string, string>

// const woffy: DogInfo = {
//   name: 'woffy',
//   color: 'red'
// }

// Option 2:-
// type DogInfo = {
//   name: string;
//   [key: string]: string | number; // MappedTypes
// }

// const woffy: DogInfo = {
//   name: 'woffy',
//   color: 'red',
//   breed: 'Mutt',
//   age: 3
// }

// Listerner for all properties of the type
interface DogInfo {
  name: string;
  age: number;
}

type Listeners<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (newValue: T[K]) => void;
}

function listenToObject<T>(obj: T, listeners: Listeners<T>) {
  throw 'Needs to be implemented';
}

const lg: DogInfo = {
  name: 'lg',
  age: 4
}

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (name: string) => {}, 
  onAgeChange: (age: number) => {}
});

