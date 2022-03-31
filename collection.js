class MySet{
    constructor(){
        this.items = {};
    }
    has(element){
        return element in this.items// this.items.hasOwnProperty(element);  
    }
    add(element){
        if(this.has(element)) return
        this.items[element] = element
    }
    delete(element){
        if(this.has(element)){
            delete this.items[element];
        }
    }
    clear(){
        this.items ={};
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.keys(this.items);
    }
}

function union(set1,set2){
    return new Set ([...set1,...set2]);
}

function intersection( set1,set2){
    let temp = new Set();
    set1.forEach(element => {
        if(set2.has(element)){
            temp.add(element)
        }
    });
    return temp
}

function difference( set1, set2){
    const temp = union(set1, set2);
    const intersectionSet = intersection(set1, set2);
    
    intersectionSet.forEach(item => {
      if(temp.has(item)) {
        temp.delete(item);
      }
    });
    return temp;
}
