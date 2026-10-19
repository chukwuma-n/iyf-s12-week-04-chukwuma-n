
console.log("===== LARGEST NUMBER =====");

function findLargest(numbers) {
    if (numbers.length === 0) {
        return "The array is empty";
    }

    return numbers.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

console.log(findLargest([4, 9, 2, 15, 7]));
console.log(findLargest([100, 25, 300, 75]));
console.log(findLargest([-8, -3, -12, -1]));
console.log(findLargest([]));
