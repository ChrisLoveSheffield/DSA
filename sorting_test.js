/**
 * O(N*2)
 * @param {number[]} nums 
 * @returns {number[]}
 */
const bubleSoring = (nums) => {
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    let sorted = true;
    for (let i = 0; i < nums.length && sorted; i++) {
        sorted = false;
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] < nums[j - 1]) {
                swap(j, j - 1);
                sorted = true;
            }
        }
    }
    return nums
}
/**
 * 
 * @param {number[]} nums
 * @returns {number[]} 
 */
const selectionSort = nums => {
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];

    for (let i = 0; i < nums.length; i++) {
        let min = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[min] > nums[j]) min = j;
        }
        swap(min, i);
    }
    return nums
}

/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
const insertionSort = nums => {
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i ; j > 0 && nums[j] < nums[j-1]; j--) swap(j-1, j);
    }
    return nums
}
/**
 * bottom-up
 * @param {number[]} nums 
 * @returns {number[]}
 */

const mergeSort = nums => {
    /**
     * @param {number} start 
     * @param {number} mid 
     * @param {number} end 
     */
    const merge = (start, mid, end) => {
        let l = start, r = mid + 1;
        let temp = new Array();
        while (l <= mid && r <= end) {
            if (nums[l] < nums[r]) temp.push(nums[l++]);
            else temp.push(nums[r++]);
        }
        while (l <= mid) temp.push(nums[l++]);
        while (r <= end) temp.push(nums[r++]);
        for (let num of temp) nums[start++] = num;
    }
    for (let i = 1; i < nums.length; i *= 2) {
        for (let j = 0; j + i < nums.length; j += i * 2) {
            let start = j, end = Math.min(j + i * 2 - 1, nums.length - 1);
            let mid = j + i - 1;
            merge(start, mid, end)
        }
    }

    return nums
}
/**
 * 
 * @param {number[]} nums 
 * @returns {number{}}
 */
const quickSortRecursion = nums => {
    if (nums.length < 2) return nums;
    const [l, r] = [new Array(), new Array()];
    for (let i = 1; i < nums.length; i++){
        if( nums[i] > nums[0]) r.push(nums[i]);
        else l.push(nums[i])
    }
    return [...quickSortRecursion(l), nums[0],...quickSortRecursion(r)]
}

console.log(insertionSort([1, 2, 1, 3, 1, 4, 1, 8, 5, 2]))