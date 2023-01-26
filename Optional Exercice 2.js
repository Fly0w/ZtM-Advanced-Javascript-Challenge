// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


let arr = [1,2,3];
let valeur = 4;

const sumInArray = (array, value) => {

    for (let i = 0; i< array.length; i++){
        let soust = value - array[i];
        for(element of array){
            if (element === soust ){
                return ([array[i], element]);
            } else {
            }
        }
    }
    return "Pas de valeur correspondante"
}

sumInArray(arr, valeur)