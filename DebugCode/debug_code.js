	
	function performOperation() {
        // Get user input from input fields
        let num1 = parseFloat(document.getElementById('input1').value);
        let num2 = parseFloat(document.getElementById('input2').value);
    
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
    
            // Perform all arithmetic operations
            let addition = add(num1, num2);
            let subtraction = subtract(num1, num2);
            let multiplication = multiply(num1, num2);
            let division = divide(num1, num2);
    
            // Display all results
            displayResult(addition, subtraction, multiplication, division);
    
        } else {
            displayResult('Please enter valid numbers');
        }
    }
    
    function add(a, b) {
        debugger;
        return a + b;
    }
    
    function subtract(a, b) {
        debugger;
        return a - b;
    }
    
    function multiply(a, b) {
        debugger;
        return a * b;
    }
    
    function divide(a, b) {
        debugger;
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
    
    function displayResult(addition, subtraction, multiplication, division) {
        const resultElement = document.getElementById('result');
    
        // If validation failed
        if (typeof addition === "string") {
            resultElement.textContent = addition;
            return;
        }
    
        resultElement.innerHTML = `
            Addition: ${addition} <br>
            Subtraction: ${subtraction} <br>
            Multiplication: ${multiplication} <br>
            Division: ${division}
        `;
    }
    
    // function performOperation() {
    //     // Get user input from input fields
    //     let num1 = parseInt(document.getElementById('input1').value);
    //     let num2 = parseInt(document.getElementById('input2').value);
    //     // Check if inputs are valid numbers
    //     if (!isNaN(num1) && !isNaN(num2)) {
    //     // Perform the operation
    //                     let result = multiply(num1, num2);
    
    //                     // Display the result
    //                     displayResult(result);
    //                 } else {
    //                     displayResult('Please enter valid numbers');
    //                 }
    //             }
    
    //             function multiply(a, b) {
    //                 // Introduce a debugger statement to pause execution
    //                 debugger;
    
    //                 // Multiply the numbers
    //                 return a * b;
    //             }
    
    //             function displayResult(result) {
    //                 // Display the result in the paragraph element
    //                 const resultElement = document.getElementById('result');
    //                 resultElement.textContent = `The result is: ${result}`;
    //             }
            
    