"use strict";
console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
    const hasElement = (el) => el !== undefined;
    class Stack {
        static elNotEmpty = (el) => el !== undefined;
        index;
        constructor() {
            this.index = -1;
        }
        get length() {
            return this.index + 1;
        }
        push(data) {
            this.index += 1;
            this[this.index] = data;
        }
        pop() {
            const lastElement = this[this.index];
            if (Stack.elNotEmpty(lastElement)) {
                delete this[this.index];
                this.index -= 1;
                return lastElement;
            }
            return null;
        }
    }
    const numberStack = new Stack();
    const stringStack = new Stack();
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        console.log({
            numberStack,
            stringStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
    {
        numberStack.push(1);
        numberStack.push(5);
        numberStack.push(12);
        stringStack.push('labas');
        stringStack.push('oho');
        stringStack.push('vau');
        console.log({
            numberStack,
            stringStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
    {
        numberStack.pop();
        numberStack.pop();
        stringStack.pop();
        console.log(stringStack.pop());
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
    }
    console.groupEnd();
}
console.groupEnd();
console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    const hasElement = (el) => el !== undefined;
    class Queue {
        static elNotEmpty = (el) => el !== undefined;
        index;
        head;
        tail;
        elements;
        constructor() {
            this.index = -1;
            this.head = 0;
            this.tail = 0;
            this.elements = {};
        }
        enqueue(data) {
            this.elements[this.tail] = data;
            this.tail += 1;
        }
        pop() {
            const item = this.elements[this.head];
            delete this.elements[this.head];
            this.index -= 1;
            this.head += 1;
            return item;
        }
        length() {
            return this.tail - this.head;
        }
    }
    console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
    {
        const numStack = new Queue();
        const strStack = new Queue();
        console.log({
            numStack,
            strStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        const numStack = new Queue();
        numStack.enqueue(1);
        numStack.enqueue(2);
        numStack.enqueue(3);
        const strStack = new Queue();
        strStack.enqueue('labas');
        strStack.enqueue('Katu');
        strStack.enqueue('wow');
        console.log({
            numStack,
            strStack,
        });
    }
    console.groupEnd();
    console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
    {
        const numStack = new Queue();
        numStack.enqueue(1);
        numStack.enqueue(5);
        numStack.enqueue(600);
        console.log(numStack);
        console.log(numStack.pop());
    }
    console.groupEnd();
    console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
    {
        const strStack = new Queue();
        strStack.enqueue('labas');
        strStack.enqueue('katu');
        strStack.enqueue('wow');
        console.log(strStack.length());
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map