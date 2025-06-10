

function getBinary(num){
    let result = [];
    let queue = ['1'];

    for(let i = 0; i < num; i++){
        let current = queue.shift();
        result.push(current);
        queue.push(current + '0');
        queue.push(current + '1');
    };

    console.log('result', result);
}

getBinary(10)