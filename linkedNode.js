class Node {
    constructor(data) {
      this.val = data;
      this.next = null;
    }
  }
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    // methods
    isEmpty() {
        return this.length === 0;
    }
    getNode(index) {
        // 判斷指定位置是否在範圍內
        if (index < 0 || index >= this.length) return null;
        // 從頭開始迭代到指定位置訪問
        let currNode = this.head;
        let currIndex = 0;
        while (currIndex < index) {
          currIndex += 1;
          currNode = currNode.next;
        }
        return currNode;
    }
    print() {
        const temp = [];
        let currNode = this.head;
        while (currNode) {
          temp.push(currNode.data);
          currNode = currNode.next;
        }
        return temp.join(', ');
    }
    append(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length += 1;
    }
    insert(index, data){
        if(index >= this.length){
            this.append(data);
            return;
        }
        const newNode = new Node(data);
        if ( index <= 0){
            newNode.next =this.head;
            this.head = newNode;
        }else{
            const preNode = this.getNode(index-1);
            newNode.next = preNode.next;
            preNode.next = newNode; 
        }
        this.length ++;
    }
    removeAt(index){
        if(index < 0 || index >= this.length) return;

        if(index ===0){
            this.head = this.head.next;
        }else{
            const preNode = this.getNode(index-1);
            preNode.next = preNode.next?.next;
        }
        this.length --;
    }
    getData(index){
        
    }
}


module.exports={ Node, LinkedList}
// const list = new LinkedList();

// list.append('data1');
// list.append('data2');
// list.append('data3');
// console.log(list.print()); // 'data1, data2, data3'

// list.insert(0, 'a');
// console.log(list.print()); // 'a, data1, data2, data3'
// list.insert(4, 'b');
// console.log(list.print()); // 'a, data1, data2, data3, b'
// list.insert(2, 'b');
// console.log(list.print()); // 'a, data1, b, data2, data3, b'
// list.removeAt(4)
// console.log(list.print())