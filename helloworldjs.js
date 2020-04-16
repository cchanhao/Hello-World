function greet() {
    document.getElementById('result').innerHTML = 'Hello World';
    return false;
}

document.getElementById('hi').addEventListener('click', greet);