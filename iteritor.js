class Range {
    constructor( from, to){
        this.from = from;
        this.to = to;
    }

    has(x){
        return typeof x === "number" && this.from <= x && this.to >= x; 
    }

    toString(){
        return `x | ${this.from} <= x <= ${ this.to} `;
    }

    [Symbol.iterator](){
        let next = Math.ceil(this.from);
        let last = this.to;
        return{
            next(){
                return (next <= last) 
                ? {value: next ++} 
                : {done: true};
            },

            [Symbol.iterator](){
                return this;
            }
        };
    }
}

function map(iterable, f){
    let iterator = iterable[Symbol.iterator]();
    return{
        [Symbol.iterator](){
            return this;
        },
        next(){
            let v = iterator.next();
            if(v.done)return v;
            else return { value: f(v.value)};
        }
    }
}

function filter(iterable, predicate){
    let iterator = iterable[Symbol.iterator]();
    return{
        [Symbol.iterator](){
            return this;
        },
        next(){
            for(;;){
                let v = iterator.next();
                if(v.done || predicate(v.value)){
                    return v
                }
            }
        }
    }
}

function* zip (...iterables){
    let iteritors = iterables.map(i=> i[Symbol.iterator]());
    let index = 0;
    while( iteritors.length > 0 ){
        if( index >= iteritors.length)
            index = 0;
        let item = iteritors[index].next();
        if(item.done){
            iteritors.splice(index, 1);
        }
        else{
            yield item.value;
            index ++;
        }
    }
}
function* sequence(...iterables){
    for(let iterable of iterables){
        for(let item of iterable){
            yield item
        }
    }
}

function* smallNumber(){
    console.log('next() invoked ths first time; argument discarded');
    let y1 = yield 1;
    console.log('next() invoked ths second time; argument discarded',y1);
    let y2 = yield 2;
    console.log('next() invoked the third time; argument discarded',y2);
    let y3 = yield 3;
    console.log('next() invoked ths fourth time; argument discarded',y3);
    return 4
}
//[...new Range( 1, 4)];
// console.log([...filter(new Range(1,10), x => x % 2 ===0)])
// console.log([...zip([2,3,5,7],'ab',[0])])
// console.log([...sequence('abc',[2,3,5,7] )])
let g = smallNumber();
console.log('generator created; no code run yet');
let n1 = g.next('a');
console.log('generator yielded',n1.value);
let n2 = g.next('b');
console.log('generator yielded',n2.value);
let n3 = g.next('c');
console.log('generator yielded',n3.value);
let n4 = g.next('d');
console.log('generator yielded',n4.value);
let n5 = g.next();
console.log(n5)



