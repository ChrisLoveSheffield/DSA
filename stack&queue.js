class Stack {
    constructor() {
      this.items = [];
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[0];    
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}
class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    rear(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear(){
        this.items = [];
    }
    size(){
        return this.items.length
    }
}
class Priorityqueue extends Queue{
    enqueue(element, priority = Infinity){
        const queueElement = { element, priority};
        if(this.isEmpty()){
            this.item.push(queueElement)
        } else {
            for(let i = 0; i<=this.items.length; i++){
                if(priority < this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    return
                }
            }
            this.items.push(queueElement)
        }
    }
}
