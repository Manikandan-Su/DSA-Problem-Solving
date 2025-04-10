class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
};

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        let temp = new Node(value);
        this.tail.next = temp;
        this.tail = temp;
        this.length++;
        return this.head;
    }


    pop(){
        let temp = this.head;
        let currentNode;
        let nextNode;

        while(temp.next){
            currentNode = temp;
            nextNode = temp.next;
            temp = nextNode
        };

        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
    }

    shift(value){
        let newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };

    unShift(){
        let removedNode = this.head.next;
        this.head = removedNode;
        this.length--;
    }
};

const list = new LinkedList(3);
console.log('list initialvalues', list)
list.push(6);
console.log('After pushing one value', list)
list.reverse();

