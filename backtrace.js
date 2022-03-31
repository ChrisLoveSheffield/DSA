/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = new Array();
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    const backtracking = (level) => {
        if (level === nums.length - 1) {
            res.push([...nums]);
            return;
        }
        for( let i = level; i < nums.length; i++){
            swap(i, level);
            backtracking(level+1)
            swap(i,level)
        }
    }
    backtracking(0)
    return res
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const res = new Array();
    const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    

    return
} 

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function (n, k) {
    const res = new Array(), comb = new Array();
    let count = 0
    const backtracking = (count, pos) => {
        if (count === k) {
            res.push([...comb]);
            return
        }
        for (let i = pos; i <= n;++i) {
            comb[count++] = i;
            backtracking(count, i + 1);
            --count;
        }
    }
    backtracking(count, 1)
    return res
};
let n = 4, k = 2;

console.table(combine(4, 2))

console.table(permute([1,2,3]))