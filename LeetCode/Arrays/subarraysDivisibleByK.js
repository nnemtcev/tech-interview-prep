// LeetCode Problem #974: Subarray Sums Divisible By K
/**
 * @param {number[]} A
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(A, k) {

    const map = {0: 1}; // Maps the remainder of a prefix sum to the frequency of prefix sums with that remainder.
    let count = 0; // Return value (number of subarrays divisible by k).
    let sum = 0; // Cumulative sum so far. Used to generate prefix sums.
    
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        let remainder = sum % k; // Find the remainder of the prefix sum.
        
        // Instead of -1 % 5 = -1, you want -1 % 5 = 4.
        if (remainder < 0) {
            remainder += k;
        }

        // If there is already a prefix sum with that remainder, then we have a contiguous subarray divisible by k.
        if (map.hasOwnProperty(remainder)) {
            count += map[remainder];
        }
        // If this is the first prefix sum with the given remainder, set that value in the hash map.
        if (!map.hasOwnProperty(remainder)) {
            map[remainder] = 1;
        } else {
            map[remainder]++;
        }
    }
    
    return count;
};