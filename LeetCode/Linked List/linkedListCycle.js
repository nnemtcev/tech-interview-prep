// LeetCode Problem #141: Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Edge cases:
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head; // Slow is a pointer that moves by one node at a time.
    let fast = head; // Fast is a pointer that moves by two nodes at a time.
    
    // If fast ends up reaching null, then there is no cycle, so false will be returned.
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        
        if (fast) {
            fast = fast.next;
        }
        
        // If slow and fast are equal, then there must be a cycle, else they would never be equal to each other.
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
};