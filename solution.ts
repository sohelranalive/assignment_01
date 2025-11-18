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

const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
) => {
  const combniedArray: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    combniedArray[combniedArray.length] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combniedArray[combniedArray.length] = array2[i];
  }

  let newArray: T[] = [];

  for (let i = 0; i < combniedArray.length; i++) {
    let tempValue = combniedArray[i];
    let isExists = false;
    for (let j = 0; j < array2.length; j++) {
      if (newArray[j] === tempValue) {
        isExists = true;
        break;
      }
    }
    if (!isExists) {
      newArray[newArray.length] = tempValue;
    }
  }

  return newArray;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (productInfo: Product[]): number => {
  const totalPrice = productInfo.reduce((subTotal, product) => {
    const discount = product.discount
      ? product.discount < 100 && product.discount > 0
        ? product.discount
        : 0
      : 0;
    const discountAmount =
      product.price * product.quantity -
      (product.price * product.quantity * discount) / 100;

    return subTotal + discountAmount;
  }, 0);

  return totalPrice;
};
