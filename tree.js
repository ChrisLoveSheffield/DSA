class BTNode {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // methods
  search(data, node = this.root){
    // let curNode = node;
    // while(curNode){
    //   if(data === curNode.data){
    //     return curNode;
    //   }
    //   if (data < curNode.data) {
    //     curNode = curNode.left;
    //   } else {
    //     curNode = curNode.right;
    //   }
    // }
    // return null;

    if (!node || node.data === data) return node;
    return node.data < data ? this.search(data, node.right) : this.search(data, node.left);
    
  }
  
  insert(data){
    if(!this.root){
      this.root = new BTNode(data);
      return;
    }
    let curNode = this.root;
    while(curNode){
      if (data < curNode.data) {
        if (curNode.left) {
          curNode = curNode.left;
        } else {
          curNode.left = new BTNode(data);
          break;
        }
      } else if (data > curNode.data) {
        if (curNode.right) {
          curNode = curNode.right;
        } else {
          curNode.right = new BTNode(data);
          break;
        }
      } else {
        break;
      }
    }
  }
  findMin(node = this.root) {
    let currentNode = node;
    while (currentNode && currentNode.left ) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  findMax(node = this.root) {
    let currentNode = node;
    while (currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
  remove(data){
    const removeNode = (data, node) => {
      const curNode = node;
      if(!curNode){
        return false
      }
      if( data < curNode.data){
        curNode.left = removeNode(data, curNode.left);
      }else if(data > curNode.data){
        curNode.right =  removeNode(data,curNode.right)
      }
      else{
        if(!curNode.left && !curNode.right)
          return null;
        if (!curNode.left) 
          return curNode.right;
        if (!curNode.right)
          return curNode.left;
        
        const aux = this.findMin(curNode.right)
        curNode.data = aux.data;
        curNode.right = removeNode(aux.data, curNode.right)
      }
      return curNode;
    }
    this.root = removeNode(data, this.root);
  }
  preOrderTraversal(){
    const temp =[];
    preHelper(this.root);
    return temp;
    function preHelper(node){
      if(node){
        temp.push(node.data);
        preHelper(node.left);
        preHelper(node.right);
      }
    }
    /*
    迭代寫法
    
    const temp = [];
    const stack = [];
    if(this.root){
      stack.push(this.root)
    }
    while(stack.length){
      const node = stack.pop();
      temp.push(node.data);
      
      if (node.right) {
        stack.push(node.right);
      }
      
      if (node.left) {
        stack.push(node.left);
      }
      }

    */
  }
  inOrderTraversal(){
    const temp = [];
    inHelper(this.root);
    return temp;

    function inHelper(node){
      if(node){
        inHelper(node.left);
        temp.push(node.data);
        inHelper(node.right);
      }
    }
  }
  postOrderTraversal() {
    const temp = [];
    postHelper(this.root);
    return temp;
    
    function postHelper(node) {
      if (node) {
        postHelper(node.left);
        postHelper(node.right);
        temp.push(node.data);
      }
    };
  }
  balanceBST(){
    const nodeList = this.inOrderTraversal();
    const { length } = nodeList;
    if(length < 3) return this.root;

    this.root = rebuild(0, length - 1);

    function rebuild( start, end){
      if(start > end){
        return null
      }
      const mid = Math.floor((start + end)/2);
      const node = new BTNode(nodeList[mid]);
      node.right =rebuild(start, mid-1);
      node.left = rebuild(mid+1,end);
      return node

    }
  }
}

class AVLTree{
  constructor(){
    this.root = null;
  }
  getNodeHieght(node) {
    if(!node) return -1;
    const lh = this.getNodeHieght(node.left);
    const rh = thits.getNodeHieght(node.right);

    return Math.max( lh, rh) +1;
  }
  getBF(node){
    return this.getNodeHieght(node.left) - this.getNodeHieght(node.right);
  }
  rightRotation(node){
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  leftRotation(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  balance(node){
    if(!node){
      return node;
    }
    const nodeBF = this.getBF(node);
    if(nodeBF > 1){
      if(this.getBF(node.left) < 0)
        node.left = this.leftRotation(node.left)
      node = this.rightRotation(node);
    }else if( nodeBF < -1){
      if (this.getBF(node.right) > 0) {
        node.right = this.rightRotation(node.right);
      }
      node = this.leftRotation(node);
    }
    return node
  }
  insert(data){
    const insetHelper = (node) =>{
      let curNode = node;
      if(!curNode){
        return new BTNode(data)
      }
      if(data < curNode.data){
        curNode.left = insetHelper(curNode.left);
      }else if(data > curNode.data){
        curNode.right = insetHelper(curNode.right)
      }
      curNode = this.balance(curNode)
      return curNode
    }
    this.root = insetHelper(this.root)
  }
  remove(data) {
    const removeNode = (data, node) => {
      let curNode = node;    // let
  
      if (!curNode) {
        return false;
      }
  
      if (data < curNode.data) {
        curNode.left = removeNode(data, curNode.left);
  
      } else if (data > curNode.data) {
        curNode.right = removeNode(data, curNode.right);
  
      } else {
  
        if (!curNode.left && !curNode.right) {
          return null;
        }
  
        if (!curNode.left) {
          return curNode.right;
        }
        if (!curNode.right) {
          return curNode.left;
        }
  
        const aux = this.findMin(curNode.right);
        curNode.data = aux.data;
        curNode.right = removeNode(aux.data, curNode.right);
      }
      curNode = this.balance(curNode);  // new
      return curNode;
    };
    this.root = removeNode(data, this.root);
  }
}

const NodeColor = {
  RED: true,
  BLACK: false,
};
class RBTNode{
  constructor (data, parent =null){
    this.data = data;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.color = NodeColor.RED;
  }
}
class RedBlackTree{
  constructor(){
    this.root = null;
  }
  rightRotation(node){
    const temp = node.left;
    node.left = temp.right;
    temp.right =node;

    //colour
    temp.color = node.color;
    node.color = NodeColor.RED;
    
    //upadte parent
    this.replaceParent(node, temp)//更改parent節點的指向
    
    //更改node's parents 的指向
    temp.parent = node.parent;
    node.parent = temp;
    //旋轉後，原本temp.left節點修正其parent 指向
    if (node.left) {
      node.left.parent = node;
    }
  }
  leftRotation(node){
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    //colouring
    temp.color = node.color;
    node.color = NodeColor.RED;

    //更改指向
    this.replaceParent(node, temp);
    temp.parent = node.parent
    node.parent =temp;
    if(node.right){
      node.right.parent =node
    }
  }
  replaceParent(curNode, newNode){
    const { parent } = curNode;
    if(!parent){
      this.root = newNode;
    } else if( curNode === parent.left ){
      parent.left = newNode;
    } else{
      parent.right = newNode;
    }
  }
  insert(data){
    const insertHelper = (node) =>{
      const curNode = node;
      if( data < curNode.data){
        if(curNode.left){
          insertHelper(curNode.left)
        }else{
          curNode.left = new RBTNode(data, curNode);
          this.insertFixRBT(curNode.left);
        }
      } else if( data > curNode.data){
        if(curNode.right){
          insertHelper(curNode.right)
        }else{
          curNode.right = new RBTNode(data, curNode)
          this.insertFixRBT(curNode.right)
        }
      }
    };

    if(!this.root){
      this.root = new RBTNode(data);
      this.insertFixRBT(this.root)
    } else{
      insertHelper(this.root)
    }
  }
  insertFixRBT(node){  //https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/712457/
    let curNode = node;
    while (this.isRed(curNode.parent) && curNode.parent.parent) {
      const { parent } = curNode;
      const grandparent = parent.parent;
  
      if (parent === grandparent.left) {
        if (this.isRed(grandparent.right)) {
          this.flipColor(grandparent);
        } else {
          if (curNode === parent.right) {
            this.leftRotation(parent);
          }
          this.rightRotation(grandparent);
        }
      } else {
        if (this.isRed(grandparent.left)) {
          this.flipColor(grandparent);
          curNode = grandparent;
        } else {
          if (curNode === parent.left) {
            this.rightRotation(parent);
          }
          this.leftRotation(grandparent);
        }
      }
      curNode = grandparent;
    }
    this.root.color = NodeColor.BLACK;
  }
  isRed(node) {
    return node ? node.color : false;
  }
  flipColor(node) {
    node.color = NodeColor.RED;
    node.left.color = NodeColor.BLACK;
    node.right.color = NodeColor.BLACK;
  }
  remove( data, node =this.root){
    const delNode = this.search(data, node)
    if(!delNode){
      return false
    }
    // 葉子節點
    if(!delNode.left && !delNode.right){
      //紅色
      if(this.isRed(delNode)){
        this.replaceParent(delNode,null)
      } else{//黑色
        this.deleteFixup(delNode);
        this.replaceParent(delNode, null);
      } 
    }// 單邊子樹
    else if (!delNode.left || !delNode.right) {
      // 單邊左子樹
      if (delNode.left) {
        delNode.left.color = NodeColor.BLACK;
        delNode.left.parent = delNode.parent;
        this.replaceParent(delNode, delNode.left);
        // 單邊右子樹
      } else {
        delNode.right.color = NodeColor.BLACK;
        delNode.right.parent = delNode.parent;
        this.replaceParent(delNode, delNode.right);
      }
    } else {
      const aux = this.findMin(delNode.right);
      delNode.data = aux.data;
      this.remove(aux.data, delNode.right);
    }
    return this.root;
  }
  search( data, node = this.root){
    if(node){
      return false
    };
    if( data === node.data){
      return node
    }
    if( data < node.data){
      return this.search(data, node.left)
    } 
    return this.search(data.node.left)
  }
  findMin(node = this.node){
    let currentNode = node;
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  deleteFixup(node) {
    let currNode = node;
    while (currNode !== this.root && !this.isRed(currNode)) {
      const { parent } = currNode;
      let bother;
  
      if (currNode === parent.left) {
        bother = parent.right;
        if (this.isRed(bother)) {
          this.leftRotation(parent);
        }
        if (!this.isRed(bother.left) && !this.isRed(bother.right)) {
          if (this.isRed(parent)) {
            parent.color = NodeColor.BLACK;
            parent.right.color = NodeColor.RED;
            break;
          }
          bother.color = NodeColor.RED;
          currNode = parent;
        } else if (this.isRed(bother.left) && !this.isRed(bother.right)) {
          this.rightRotation(bother);
        } else {
          this.leftRotation(parent);
          parent.color = NodeColor.BLACK;
          bother.right.color = NodeColor.BLACK;
          break;
        }
      } else {
        bother = parent.left;
        if (this.isRed(bother)) {
          this.rightRotation(parent);
        }
        if (!this.isRed(bother.left) && !this.isRed(bother.right)) {
          if (this.isRed(parent)) {
            parent.color = NodeColor.BLACK;
            parent.left.color = NodeColor.RED;
            break;
          }
          bother.color = NodeColor.RED;
          currNode = parent;
        } else if (this.isRed(bother.right) && !this.isRed(bother.left)) {
          this.leftRotation(bother);
        } else {
          this.rightRotation(parent);
          parent.color = NodeColor.BLACK;
          bother.left.color = NodeColor.BLACK;
          break;
        }
      }
    }
  }
}

const nums = [ 43, 45, 49, 56, 58, 60, 64, 68, 72 ]
const rbTree = new RedBlackTree()
nums.forEach(i=>{
  rbTree.insert(i)
})
