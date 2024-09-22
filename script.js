function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    if (input.trim() === '') {
        alert('Please input a value');
        return;
    }

    let resultMessage;
    if (isPalindrome(input)) {
        resultMessage = `${input} is a palindrome`;
    } else {
        resultMessage = `${input} is not a palindrome`;
    }

    resultDiv.textContent = resultMessage;
});
