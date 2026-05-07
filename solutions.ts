
const filterEvenNumbers = (arr: number[]): number[] => {
  const filteredArray = arr.filter((num: number) => {
    if (num % 2 === 0) {
      return num;
    }
  })
  return filteredArray;
}





const reverseString = (text: string): string => {
  const singleLettersArray = text.split("")
  const reversedTextArray = singleLettersArray.reverse().join("");
  return `"${reversedTextArray}"`;
}




type StringOrNumber = number | string;

const checkType = (text: StringOrNumber) => {
  if (typeof text === "number") {
    return `"Number"`;
  }
  if (typeof text === "string") {
    return `"String"`;
  }
}




const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T>(info: T, key: keyof T) => {
  return info[key]
}




interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const toggleReadStatus = (bookInfo: Book) => {
  return {
    ...bookInfo,
    isRead: true
  }
}





class Person {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name,
      this.age = age
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade;
  }

  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`
  }
}





type getIntersectionFunc = (array1: number[], array2: number[]) => number[];

const getIntersection: getIntersectionFunc = (array1, array2) => {
  const intersectedArray = array1.filter((number: number) => {
    return array2.includes(number);
  })
  return intersectedArray;
}