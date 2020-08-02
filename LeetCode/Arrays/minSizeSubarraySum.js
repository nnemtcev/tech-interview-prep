// LeetCode Problem #209: Minimum Size Subarray Sum
// This is a sliding window problem.
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let result = Number.MAX_VALUE;
    let windowStart = 0;
    let sum = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (sum <= s) {
            sum += nums[windowEnd];
        }
        if (sum >= s) {
            result = Math.min(result, windowEnd - windowStart + 1);
        }
        while (sum > s) {
            sum -= nums[windowStart];
            windowStart++;
            if (sum >= s) {
                result = Math.min(result, windowEnd - windowStart + 1);
            }
        }
    }
    
    if (result === Number.MAX_VALUE) {
        return 0;
    }
    
    return result;
};