const handleSum = () =>{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let num4 = parseFloat(document.getElementById('num4').value);
    let num5 = parseFloat(document.getElementById('num5').value);
    
    let userNumbers = [num1, num2, num3, num4, num5];

    if(userNumbers.some(isNaN)){
        document.getElementById("sumResult").textContent = "Please enter valid numbers";

        return;
    }


    let sum = userNumbers.reduce((acc, curr) => acc + curr, 0);

    let average = sum/userNumbers.length;
    let highest = Math.max(...userNumbers);
    let lowest = Math.min(...userNumbers);
    document.getElementById("sumResult").innerHTML = `
    Sum: ${sum} <br>
    Average: ${average} <br>
    Highest Number: ${highest} <br>
    Smallest Number: ${lowest}
    `;
};