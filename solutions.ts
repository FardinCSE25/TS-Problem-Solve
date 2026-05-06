
const filterEvenNumbers = (arr: number[]) => {
    const filteredArray = arr.filter((num : number) =>{
        if(num % 2 === 0){
            return num;
        }
    })
    return filteredArray;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
