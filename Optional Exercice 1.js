const arr = [43,1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 43, 391, 392, 591]

const rangerArray = array =>{
    let sortedArray = array.sort((a, b) => a-b);
    let finalArray = [];
    let tempArray = [];

    for (let i = 0; i < sortedArray.length; i++){
        if (sortedArray[i] === sortedArray[i+1]){
            tempArray.push(sortedArray[i]);
            
        } else {
            if (tempArray.length === 0){ 
                finalArray.push(sortedArray[i]);
            } else {
                tempArray.push(sortedArray[i]);
                finalArray.push(tempArray);
            }
            tempArray = [];           
        }
    }
    return finalArray
}


"Objectif = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 43, 391, 392,591]"

