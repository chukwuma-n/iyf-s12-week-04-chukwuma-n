
console.log("===== PALINDROME CHECKER =====");

function isPalindrome(text) {
    const cleanedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return cleanedText === cleanedText.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
