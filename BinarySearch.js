const inputData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 4;



function binarySearch(inputArr, target) {

    let left = 0;
    let right = inputArr.length - 1;
    while (left <= right) {
        let mid = (left + right) / 2;
        mid = Math.floor(mid);

        if (inputArr[mid] == target) {
            return mid;
        };

        if (target > inputArr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1;
        } 
    }
    return -1;
};

const result = binarySearch(inputData, targetValue);
if (result > 0) {
    console.log('Element found in', result)
} else {
    console.log('Elements not found',result);
}

