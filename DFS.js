/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxAreaOfIsland = function (grid) {
//     const direction = [-1, 0, 1, 0, -1]
//     const m = grid.length, n = m ? grid[0].length : 0;
//     let localArea = area = 0, x, y;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j]) {
//                 localArea = 1;
//                 grid[i][j] = 0;
//                 let island = new Array();
//                 island.push([i, j])
//                 while (island.length) {
//                     let [r, c] = island.pop();
//                     for (let k = 0; k < 4; ++k) {
//                         x = r + direction[k], y = c + direction[k + 1]
//                         if (grid[x]?.[y] === 1) {
//                             grid[x][y] = 0;
//                             ++localArea;
//                             island.push([x, y])
//                         }
//                     }
//                 }
//                 area = Math.max(area, localArea)
//             }
//         }
//     }
//     return area;
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {

    const direction = [-1, 0, 1, 0, -1], m = grid.length, n = m ? grid[0].length : 0;
    let max = 0;
    /**
     * 
     * @param {number} y 
     * @param {number} x 
     */
    const dfs = (x, y) => {
        if (grid[x]?.[y]) {
            let area = 1
            grid[x][y] = 0;
            for (let k = 0; k < 4; k++) area += dfs(x + direction[k], y + direction[k + 1])
            return area;
        }
        return 0
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max( dfs(i,j), max)        
        }
    }
    return max
}
let isConnected = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];
console.log(maxAreaOfIsland(isConnected))