//Next Greater Element

const Input =  [1, 2, 1]

let op = [];;
for (let i = 0; i < Input.length; i++){
    let currentvalue = Input[i];
    let nextMax = -1;

    //right accurance check
    for (let j = i+1; j < Input.length; j++){
        if(currentvalue < Input[j]){
            nextMax = Input[j];
            break;
        }
    }

    if (nextMax == -1) {
        for (let j = 0; j < i; j++) {
            if (currentvalue < Input[j]) {
                nextMax = Input[j];
                break;
            }
        }
    } 

    op.push(nextMax)
};

console.log('op', op)