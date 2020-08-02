// LeetCode Problem #325: Maximum Size Subarray Equals k
var maxSizeSubarraySum = function(nums, k) {
    let maxSize = 0;
    const map = {};
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            maxSize = Math.max(maxSize, i + 1);
        }
        if (map.hasOwnProperty(sum - k)) {
            maxSize = Math.max(maxSize, i - map[sum - k]);
        }
        if (!map.hasOwnProperty(sum)) {
            map[sum] = i;
        } else {
            map[sum] = Math.min(map[sum], i);
        }
    }

    return maxSize;
}