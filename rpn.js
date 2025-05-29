//Reverse Polish notation

function evalRPN(token){
    let stack = [];
    
    for (let char of token){
        if(!isNaN(char)){
            stack.push(Number(char))
        } else {
            let second = stack.pop();
            let first = stack.pop();
            let result;
            switch (char) {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    result = Math.trunc(first/second);
                    break;
            };
            stack.push(result)
        }
    };
    return stack.pop()
}
console.log(evalRPN(["2", "1", "+", "3", "*"]));      // 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));     // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22