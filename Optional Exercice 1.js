//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

"Goal = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 43, 391, 392,591]"

const arr = [43,1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// sorted array : [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 43, 391, 392, 591]


const sortArray = array =>{
    let sortedArray = array.sort((a, b) => a-b);   //Sort the array in increasing order
    let finalArray = [];                           //Empty array to be filled
    let tempArray = [];                            //Temporary array for cases when there is identical numbers, we'll put them in this tempArray

    for (let i = 0; i < sortedArray.length; i++){ //For every element in the sorted array
        if (sortedArray[i] === sortedArray[i+1]){       //If the element [i] and the next one are identical...
            tempArray.push(sortedArray[i]);                 //... push the element in the tempArray
            
        } else {    //If the next element is different from the element [i]
            if (tempArray.length === 0){          //... And if there is nothing in the tempArray, i.e the value is unique
                finalArray.push(sortedArray[i]);        //...Then add this value in the final Array
            } else {                              // But if the tempArray has something inside it, i.e this value is the last one of its kind
                tempArray.push(sortedArray[i]);         // Push this last value in the tempArray
                finalArray.push(tempArray);             // Then there will be no more values to put in the tempArray after this one, let's push it in the final array
            }
            tempArray = []; // We reset the tempArray as we move on to a new different value          
        }
    }
    return finalArray
}




