// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


let arr = [1,2,3];
let value = 2;

const sumInArray = (array, value) => {

    for (let i = 0; i< array.length; i++){ //For each element of array
        let substr = value - array[i]; //Calculate the value that we are looking for in the array

        for(let j = 0; j < array.length; j++){ //Then again, for each element in the array
            if (array[j] === substr && i !== j){ //If the element is equal to the value we're looking for AND it's a different element
                return ([array[i], array[j]]);//Return the array with the first loop value and the second loop value
            } else {
            }
        }
    }
    return "No value" //If there's no combination 
}

sumInArray(arr, value)