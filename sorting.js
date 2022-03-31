function bubleSort(arr){
    let length = arr.length;
    let swapped = true;
    for(let k= length; k>=0 && swapped ; k--){
        swapped = false;
        for(let i=0; i< k; i++ ){
            if( arr[i] > arr[i+1] ){
                swapped = true;
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
            }
        }
    }
    return arr
}

function selectionSort(arr){
    const n = arr.length;
   
    for(let k=0; k<n; k++){
        let minIndex = k;
        for(let i=k; i<n; i++){
            if(arr[i] < arr[minIndex] ){
                minIndex = i;
            }
        }
        [arr[minIndex], arr[k]] = [arr[k],arr[minIndex]]
    }
    return arr

}

function insertionSort(arr){
    let resultArray = [];
    for(let i = 0; i< arr.length; i++){
        if(i==0){
            resultArray.push(arr[i]);

        }else{
            for( let k = resultArray.length-1; k>=0; k--){
                if(resultArray[k]<arr[i]){
                    resultArray.splice(k+1,0,arr[i])
                    break
                }else if(k==0){
                    resultArray.splice(0,0,arr[i])
                }
            }
        }
    }
    return arr
}

function mergeSort(arr) {
    const n = arr.length; // 1
    // 2
   if (n < 2) {
     return arr;
   }
   const midIndex = Math.floor(n / 2); // 3
   // 4
   const leftArray = arr.slice(0, midIndex);
   const rightArray = arr.slice(midIndex);
 
   // 5
   return merge(mergeSort(leftArray),mergeSort(rightArray))

   function merge(leftArr, rightArr) {
        const temp = [];
        let [leftIndex, rightIndex] = [0, 0];
        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if(leftArr[leftIndex] < rightArr[rightIndex]) {
                temp.push(leftArr[leftIndex++]);
            } else {
                temp.push(rightArr[rightIndex++]);
            }
        }
        return [...temp, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    }
}

function quickSort(arr) {
    const n = arr.length;
    if (n < 2) { return arr; } // 1

    const pivot = arr[0];  // 2
    const [leftArr, rightArr] = [[], []];

        // 3
    for (let i = 1; i < n; i++) {
        if(pivot > arr[i]) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
    }
}
// 4
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
function quickSort2(arr, start=0, end = arr.length -1 ){
    if( start >= end) return arr;
    const pivotIndex = partition(arr, start, end);

    quickSort2( arr, start, pivotIndex-1);
    quickSort2( arr, pivotIndex+1, end);
    
    return arr
    function partition(arr, start, end){
        const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];
        
        const pivot = arr[start];
        let firstRightIndex = start+1;

        for(let i = start+1; i <= end; i++){
            if(arr[i] < pivot)
                swap(arr, i, firstRightIndex++);
        }
        const lastLeftIndex = firstRightIndex - 1;  // 6
        swap(arr, start, lastLeftIndex);
        
        return lastLeftIndex;
    
    }
}

function heapSrot(arr){
    const n = arr.length;
    buildMaxHeap(arr);

    for(let i =n-1; i >0; i--){
        swap(arr,0,i);
        maxHeapify(arr, 0, i)
    }


    function buildinMapHeap(arr){
        let n = arr.length;
        const lastParent = Math.floor(n/2)-1;
    
        for (let i = lastParent; i >= 0; i--) {
            maxHeapify(arr, i, n);
        }
    
        function maxHeapify(arr,index, heapSize){
            const iLeft =2* index +1;
            const iRight = iLeft+1;
            let iMax = index;
            if(iLeft < heapSize && arr[iMax] < arr[iLeft] ){
                iMax = iLeft
            }
            if(iRight < heapSize && arr[iMax] < arr[iRight]){
                iMax = iRight;
            };
            if( iMax !== index){
                swap(arr, iMax, index);
                maxHeapify(arr, iMax, heapSize)
            }
    
            function swap(arr, a, b) {
                [arr[a], arr[b]] = [arr[b], arr[a]];
              }
    
        }
    }

}

console.log( heapSrot(nums))
let array = new Array(5,6,1,2,3,4);
//let array = new Array(5,3,4,2,6,7,24,53,35235,235,4,2,1);
console.log(quickSort2(array))