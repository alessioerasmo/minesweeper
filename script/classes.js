/*
 * Classe che rappresenta virtualmente una singola casella
 */
class Node {

    constructor(identifier) {
        this.clickable = true;
        this.identifier = identifier;
        this.flagged = false;
    }

    setValue(value) {
        this.value = value;
        /*
         * il valore può essere: 
         * -1       -> vuoto
         * 0        -> mina
         * 1..8     -> warning mine
         */
    }
    getValue() {
        return this.value;
    }

    setClickable(clickable) {
        this.clickable = clickable;
    }

    isClickable() {
        return this.clickable;
    }

    isCovered() { return this.isCovered; }

    toString() {
        return this.identifier;
    }
    flag() {
        this.flagged = true;
    }
    unflag() {
        this.flagged = false;
    }
    isFlagged() {
        return this.flagged;
    }
}


/*
 * Classe stack che implementa il funzionamento di una pila
 */

class Stack {

    constructor() {
        this.up = null;
        this.size = 0;
    }

    push(element) {
        if (this.size == 0)
            this.up = new StackElement(element, null);
        else
            this.up = new StackElement(element, this.up);
        this.size++;
    }

    pop() {
        if (this.size > 0) {
            var element = this.up.element;
            this.up = this.up.down;
            this.size--;
            return element;
        } else return null;
    }

    pick() {
        return this.up.element;
    }

    getsize() {
        return this.size;
    }

    printstack() {
        var el = this.up;
        for (var i = 0; i < this.size; i++) {
            console.log(el.element);
            el = el.down;
        }
    }


    teststack() {
        var stack = new Stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        console.log("ora la dimensione dello stack è " + stack.size);

        stack.printstack();

        console.log("faccio una pop: ");
        stack.pop();
        console.log("ora la dimensione dello stack è " + stack.size);
        stack.printstack();

        console.log("faccio una pop: ");
        stack.pop();
        console.log("ora la dimensione dello stack è " + stack.size);
        stack.printstack();

        console.log("faccio 2 push: ");
        stack.push(12);
        stack.push(4);
        stack.printstack();

        console.log("ora la dimensione dello stack è " + stack.size);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        console.log("ora la dimensione dello stack è " + stack.size);

        stack.printstack();

        var num = stack.getsize();
        for (var i = 0; i < num; i++)
            console.log("ho rimosso " + stack.pop());

        stack.printstack();
        console.log(stack.getsize());

        stack.push("pippo");
        stack.printstack();
        console.log(stack.getsize());

        stack.pop();
        stack.printstack();
        console.log(stack.getsize());
    }

}

class StackElement {

    constructor(element, down) {
        this.down = down;
        this.element = element;
    }

}