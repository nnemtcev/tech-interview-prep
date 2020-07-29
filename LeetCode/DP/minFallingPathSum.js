// LeetCode Problem #931: Minimum Falling Path Sum
// This is a DP problem asking you to find the falling path in A with the minimum sum.
// Pattern 1: finding min/max sum, path, or cost to some target condition.
// Approach: find min/max of previous states reachable from current state and 'add' current state to the min/max.

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    // Edge case: if A is empty or null, then there is no minimum sum b/c there are no falling paths.
    if (A.length === 0 || !A) {
        return null;
    }
    
    const dp = []; // Tabulation for DP. However, you can use A as the DP array instead to save memory.
    let minSum = Number.MAX_VALUE; // Return value.
    
    // Initializing values in the DP square matrix.
    for (let i = 0; i < A.length; i++) {
        dp[i] = []; // Empty rows.
        for (let j = 0; j < A.length; j++) {
            dp[i][j] = 0; // Placeholder values.
        }
    }
    
    // Setting up the initial states for the DP square matrix.
    for (let i = 0; i < A.length; i++) {
        dp[0][i] = A[0][i];
    }
    
    // Iterating starting from 2nd row b/c 1st row responsible for initial states.
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            // If an entry in the column to the left by 1 does not exist.
            if (j - 1 < 0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]) + A[i][j];
            // If an entry in the column to the right by 1 does not exist.
            } else if (j + 1 >= A.length) {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + A[i][j];
            // If entries in the columns to the left by 1, to the right by 1, and right above exist.
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + A[i][j];
            }
        }
    }
    
    // Choose the smallest path sum.
    for (let i = 0; i < A.length; i++) {
        minSum = Math.min(minSum, dp[A.length - 1][i]);
    }
    
    return minSum;
};