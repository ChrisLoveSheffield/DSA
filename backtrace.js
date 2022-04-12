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
        for (let i = level; i < nums.length; i++) {
            swap(i, level);
            backtracking(level + 1)
            swap(i, level)
        }
    }
    backtracking(0)
    return res
};
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
        for (let i = pos; i <= n; ++i) {
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

console.table(permute([1, 2, 3]))
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length === 0) return false;
    const m = board.length, n = board[0].length;
    const direction = [-1, 0, 1, 0, -1];
    let find = false;
    const backtracing = (x, y, count, visited = new Array(m).fill().map(() => new Array(n).fill(false))) => {
        if (count === word.length) {
            find = true;
            return
        }
        if (visited[x]?.[y] === false && word[count] === board[x]?.[y]) {
            visited[x][y] = true;
            for (let i = 0; i < 4 && !find; i++) {
                backtracing(x + direction[i], y + direction[i + 1], count + 1, visited)
            }
            visited[x][y] = false;
        } else {
            return;
        }
    }

    for (let i = 0; i < m && !find; i++) {
        for (let j = 0; j < n && !find; j++) {
            let count = 0;
            backtracing(i, j, count);
        }
    }
    return find
};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
console.log(exist(board, word))
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = new Array();
    const board = new Array(n).fill('.'.repeat(n));
    const ldiag = new Array(2 * n - 1).fill(false), rdiag = new Array(2 * n - 1).fill(false);
    const column = new Array(n).fill(false);
    const backtracing = (level) => {
        if (level === n) {
            res.push([...board])
            return
        }
        for (let i = 0; i < n; i++) {
            if (column[i] || ldiag[n - level + i - 1] || rdiag[level + i - 1]) continue;
            board[level] = board[level].substring(0, i) + 'Q' + board[level].substring(i + 1);
            column[i] = ldiag[n - level + i - 1] = rdiag[level + i - 1] = true;
            backtracing(level + 1);
            column[i] = ldiag[n - level + i - 1] = rdiag[level + i - 1] = false;
            board[level] = board[level].substring(0, i) + '.' + board[level].substring(i + 1);
        }
    }

    backtracing(0)
    return res
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const permuteUnique = (nums) => {
    const res = new Array(), map = new Map();
    for (let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    }
    const temp = new Array();
    const backtracing = () => {
        if (temp.length === nums.length) {
            res.push([...temp])
        }
        for (let [key, val] of map.entries()) {
            if(val > 0){
                temp.push(key);
                map.set(key, val-1)
                backtracing();
                temp.pop()
                map.set(key, val)
            }
        }

    }
    backtracing(0)
    return res
};