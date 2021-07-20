export default class ExpressionEvaluator {
	constructor(){
		this.expression = [];
	}
  addOperator(operator) {
    this.expression.push(operator);
  }
  addOperand(operand) {
    this.expression.push(operand);
  }
  getExpression() {
    return this.expression;
  }
  isOperand(value) {
    return typeof value === "number";
  }
  performOperation( operand1, operand2, operator ) {
    if (operator === "+") return operand2 + operand1;
    if (operator === "-") return operand2 - operand1;
    if (operator === "*") return operand2 * operand1;
    if (operator === "/") return operand2 / operand1;
    return -Infinity;
  }
  // Postfix Evaluation
  evaluateExpression() {
    const stack= [];
    this.expression.forEach((element) => {
      if (this.isOperand(element)) {
        stack.push(element);
        return;
      }
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      stack.push(
        this.performOperation( operand1, operand2, element)
      );
    });
    return Number(stack.pop());
  }
}

const expression = new ExpressionEvaluator();
expression.addOperand(4);
expression.addOperand(5);
expression.addOperator("+");
console.log(expression.getExpression());
console.log(expression.evaluateExpression());