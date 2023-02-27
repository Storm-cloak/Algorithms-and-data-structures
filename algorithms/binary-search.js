/** Time complexity: O(Log n)
 *  Space complexity: O(1)
 * */
const binarySearchIterative = (array, target) => {
    if (!array.length || !target) return;

    let leftPtr = 0;
    let rightPtr = array.length - 1;

    while (leftPtr <= rightPtr) {
        const middle = Math.floor((rightPtr + leftPtr) / 2);
        const guess = array[middle];

        if (guess === target) return middle;
        else if (guess > target) rightPtr = middle - 1;
        else leftPtr = middle + 1;
    }
    return;
}
console.log('Iterative Binary Search:', binarySearchIterative([1, 3, 4, 5, 6, 7, 8], 3));

/** Time complexity: O(Log n)
 *  Space complexity: O(Log n)
 * */
const binarySearchRecursive = (array, target, leftPtr = 0, rightPtr = array.length - 1) => {
    if (leftPtr > rightPtr) return;

    const middle = Math.floor((rightPtr + leftPtr) / 2);
    const guess = array[middle];

    if (guess === target) return middle;
    else if (guess > target) return binarySearchRecursive(array, target, leftPtr, middle - 1);
    else return binarySearchRecursive(array, target, middle + 1, rightPtr);
}


console.log('Recursive Binary Search:', binarySearchRecursive([1, 3, 4, 5, 6, 7, 8], 8));