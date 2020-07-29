// LeetCode Problem #64: Minimum Path Sum
// This is a DP problem asking you to find the min sum to a target.
// Pattern 1: finding min/max sum, path, or cost to some target condition.
// Approach: find min/max of previous states reachable from current state and 'add' current state to the min/max.

// Helper function that checks if the position (row, col) is valid.
var isPositionValid = function(row, col, numRows, numCols) {
    if (row < 0 || row >= numRows || col < 0 || col >= numCols) {
        return false;
    }
    
    return true;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // Edge case:
    if (grid.length === 0 || !grid) {
        return 0;
    }

    // Note: to achieve O(1) space complexity, use grid. No need to define a separate 2D array.
    
    const numRows = grid.length; // Number of rows in grid.
    const numCols = grid[0].length; // Number of columns in grid.
    
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            let min = Number.MAX_VALUE;
            if (isPositionValid(i, j - 1, numRows, numCols)) {
                min = grid[i][j - 1];
            }
            if (isPositionValid(i - 1, j, numRows, numCols)) {
                min = Math.min(min, grid[i - 1][j]);
            }
            grid[i][j] = min + grid[i][j];
        }
    }
    
    return grid[numRows - 1][numCols - 1];
};