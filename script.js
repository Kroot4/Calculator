class Calculator {

	constructor() {
	}

	 add(a,b) {
		return a + b;
	}

	 subtract(a,b) {
		return a - b;
	}

	 multiply(a,b) {
		return a * b;
	}

	 divide(a,b) {
		if (a === 0 || b == 0) {
			alert('Why you do this?');
			a = "";
			b = "";
			return;
		}
		return a / b;
	}

	 operate(operator, a, b)  {
	 	operator = operator;
	 	a = a;
	 	b = b;
		switch (operator) {
			case '+':
				return this.add(a,b);
				break;
			case '-': 
				return this.subtract(a,b);
				break;
			case '*':
				return this.multiply(a,b);
				break;
			case '/':
				return this.divide(a,b);
				break;
			default:
				return a;
		}
	}

	display() {
		const outputBox = document.querySelector('#outputBox');
		const clearSingle = document.querySelector('#clearSingle');
		const opBtns = document.querySelectorAll('.operator');
		const numBtns = document.querySelectorAll('.number');
		const equals = document.querySelector('.equals');
		const clearButton = document.querySelector('#clearButton');
		const decimalButton = document.querySelector('#decimal');
		const plusNegative = document.querySelector('.plusNegative');

		let numA = '';
		let numB = '';
		let operator = '';
		
		numBtns.forEach(numBtn => {
			numBtn.addEventListener('click', e => {
				if (operator === "") {
					numA += e.target.textContent;
					outputBox.textContent = numA;
				} else {
					numB += e.target.textContent;
					outputBox.textContent = numB;
				};

			})
		})
		
		opBtns.forEach(opBtn => {
			if (operator !== "=") {
				opBtn.addEventListener('click', e => {
					operator = e.target.textContent;
					outputBox.textContent = operator;
				})
			}
		})

		equals.addEventListener('click', () => {
			let solution = this.operate(operator, parseFloat(numA), parseFloat(numB));
			if (solution === undefined || solution === NaN) {
				solution = "";
			}
			outputBox.textContent = solution;
			operator = "";
			numA = solution.toString();
			numB = "";
		});

		clearButton.addEventListener('click', () => {
			outputBox.textContent = "";
			operator = '';
			numA = "";
			numB = "";
		})
		
		clearSingle.addEventListener('click', () => {
			if (operator === "") {
					let arrayA = numA.split("");
					arrayA.pop();
					numA = arrayA.join("");
					outputBox.textContent = numA;
				} else {
					let arrayB = numB.split("");
					arrayB.pop();
					numB = arrayB.join("");
					outputBox.textContent = numB;
				};
		})

		plusNegative.addEventListener('click', () => {
				if (operator === "") {
					numA *= -1;
					outputBox.textContent = numA;
				} else {
					numB *= -1;
					outputBox.textContent = numB;
				};
		})

		decimalButton.addEventListener('click', () => {
			if (operator === "") {
				if (numA.includes('.')) {
					return numA;
				}
				numA += '.';
				outputBox.textContent = numA;
			} else {
				if (numB.includes('.')) {
					return numB;
				}
				numB += '.';
				outputBox.textContent = numB;
			}
		})
	}
}

const calc1 = new Calculator();
calc1.display();







		
		



	





