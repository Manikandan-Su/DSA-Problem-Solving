let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

for (let i = 1; i < myArray.length; i++){
    let insertIndex = i;
    let currentValue = myArray.splice(i, 1)[0];
    for (let j = i - 1; j < myArray.length; j++){
        if(myArray[j] > currentValue){
            insertIndex = j;
        } else{
            break;
        }
    }
    myArray.splice(insertIndex, 0, currentValue);
}

console.log("Sorted array:", myArray);
