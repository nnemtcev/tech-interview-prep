// LeetCode Problem #746: Min Cost Climbing Stairs
// This is a DP problem asking you to find the min cost to a target (top of the floor).
// Pattern 1: finding min/max sum, path, or cost to some target condition.
// Approach: find min/max of previous states reachable from current state and 'add' current state to the min/max.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Edge case: if there are no steps, then you're already technically on the top of the floor, so cost is 0.
    if (cost.length === 0 || !cost) {
        return 0;
    }
    
    const dp = [cost[0], cost[1]]; // Tabulation w/ initial states.
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    
    // You can reach the top of the floor from either the last step or the second-last step.
    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};