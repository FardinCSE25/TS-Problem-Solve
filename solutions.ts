// Problem-1 :
const filterEvenNumbers = (arr: number[]): number[] => {
    const filteredArray = arr.filter((num: number) => {
        if (num % 2 === 0) {
            return num;
        }
    })
    return filteredArray;
}



// Problem-2 :
const reverseString = (text: string) : string => {
    const singleLettersArray = text.split("")
    const reversedTextArray = singleLettersArray.reverse().join("");
    return reversedTextArray;
}


// Problem-3 :
type StringOrNumber = number | string;
const checkType = (text: StringOrNumber) => {
  if(typeof text === "number"){
    return "Number";
  }
  if(typeof text === "string"){
    return "String";
  }
}


// Problem-4 :





