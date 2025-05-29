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

    search(value){
        let temp = this.head;
        while(temp){
            if(temp.value == value){
                return true;
            }
            temp = temp.next
        };
        return false;
    }

    delete(value) {
        let temp = this.head;
        while(temp){
            if(temp.value == value){
                temp.value = temp.next.value;
                temp.next = temp.next.next;
            };
            temp = temp.next;
        };
        this.length--;
    }

    push(value) {
        let temp = new Node(value);
        this.tail.next = temp;
        this.tail = temp;
        this.length++;
        return this.head;
    }


    pop() {
        let temp = this.head;
        let current = temp;
        let nextValue = temp.next
        while (temp.next) {
            current = temp;
            nextValue = temp.next;
            temp = nextValue;
        };
        this.tail = current;
        this.tail.next = null;
        this.length--
    }

    shift(value) {
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
list.push(6);
list.push(9);
list.push(12);
list.delete(6);
console.log('List', list)

