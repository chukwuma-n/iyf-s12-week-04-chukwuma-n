
console.log("===== REMOVE DUPLICATES =====");

function removeDuplicates(items) {
    return [...new Set(items)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["blue", "black", "blue", "white"]));
console.log(removeDuplicates([]));
