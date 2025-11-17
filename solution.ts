type InputType = string | number | boolean;

const formatValue = (userInput: InputType): InputType => {
  if (typeof userInput === "string") {
    return userInput.toUpperCase();
  } else if (typeof userInput === "number") {
    return userInput * 10;
  } else {
    return !userInput;
  }
};

type StringArray = string | any[];

const getLength = (userInput: StringArray): number => {
  if (Array.isArray(userInput)) {
    return userInput.length;
  } else {
    return userInput.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
