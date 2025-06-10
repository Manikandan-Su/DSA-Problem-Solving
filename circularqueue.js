class CircularQueue{
    constructor(size){
        this.element = [];
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.back = -1;
    }

    enqueue(value){
        if(this.length >= this.size){
            console.log('Size exceeded')
        }
        this.back++;
        this.element[this.back % this.size] = value;
        this.length++;
    }

    dequeue(){
        let removed = this.element[this.front & this.size];
        this.element[this.front & this.size] = null;
        this.front++;
        this.length--;
        return removed;
    }

    getFront() {
        if (isEmpty()) {
            console.log('Queue is empty')
        } else {
            return this.element[this.front % this.size];
        }
    }

    isEmpty() {
        return (this.length == 0)
    }
}

const queue = new CircularQueue();
queue.enqueue(5);

console.log('queue', queue)