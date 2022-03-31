/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length === 0) return false;

    const m = board.length, n = board[0].length;
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));
    for( let i =0; i < m; i++)
    
};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
exist(board, word)