/** Tome complexity: O(n^2)
 * Space complexity: O(n) */
const selectionSort = (unsortedArr) => {
    const sortedArr = [];
    const arrayLength = unsortedArr.length;

    for (let i = 0; i < arrayLength; i++) {
        const smallestIndex = findSmallest(unsortedArr);
        sortedArr.push(unsortedArr[smallestIndex]);
        unsortedArr.splice(smallestIndex, 1);
    }

    return sortedArr;
}

const findSmallest = (unsortedArr) => {
    let smallest = unsortedArr[0];
    let smallestIndex = 0;

    for (let i = 1; i < unsortedArr.length; i++) {
        if (unsortedArr[i] < smallest) {
            smallest = unsortedArr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}


/** input: [1,2,4,3,10,8] */


console.log(selectionSort([1, 2, 4, 3, 10, 8]))