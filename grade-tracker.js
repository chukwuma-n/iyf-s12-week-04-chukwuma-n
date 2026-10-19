
console.log("===== GRADE TRACKER =====");

const students = [
    { name: "Alice", scores: [90, 92, 93] },
    { name: "Brian", scores: [70, 75, 82] },
    { name: "Charlie", scores: [85, 88, 90] }
];

function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(calculateAverage([90, 92, 93]));
console.log(calculateAverage([70, 75, 82]));
console.log(students.find(student => student.name === "Alice").name);
console.log(students.find(student => student.name === "Charlie").name);
