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

type BooksArray = {
  title: string;
  rating: number;
};

const filterByRating = (userInput: BooksArray[]): BooksArray[] => {
  const filteredArray = userInput
    .filter((entry) => entry.rating >= 4)
    .map((book) => book);

  return filteredArray;
};

type usersArray = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (userInput: usersArray[]): usersArray[] => {
  const filteredArray = userInput
    .filter((entry) => entry.isActive)
    .map((user) => user);

  return filteredArray;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookInfo: Book) => {
  console.log(
    `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${
      bookInfo.publishedYear
    }, Available: ${bookInfo.isAvailable ? "Yes" : "No"}`
  );
};
