//Next Greater Element

const Input =  [6, 5, 4, 3]

let op = [];;
for (let i = 0; i < Input.length; i++){
    let currentvalue = Input[i];
    let nextMax = -1;
    for (let j = i+1; j < Input.length; j++){
        if(currentvalue < Input[j]){
            nextMax = Input[j];
            break;
        }
    }
    op.push(nextMax)
};

console.log('op', op)