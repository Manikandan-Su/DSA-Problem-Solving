class QueueInstance{
    constructor(){
        this.value = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value){
        this.value[this.tail] = value;
        this.tail++
        return this.value;
    }

    dequeue(){
        let deleted = this.value[this.head];
        delete this.value[this.head];
        this.head++;
        return deleted;
    };

    isLength(){
        return this.tail - this.head;
    }

    peek(){
        return this.value[this.head];
    }

    isEmpty(){
        if(!this.isLength){
            return true;
        }
        return false;
    }

};

const queue = new QueueInstance();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue);
queue.dequeue();
console.log(queue)
console.log(queue.peek())
