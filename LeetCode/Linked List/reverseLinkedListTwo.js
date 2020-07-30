// LeetCode Problem #92: Reverse Linked List II
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // Edge case: no reversal.
    if (m === n) {
        return head;
    }
    
    let prev = null; // Previous node.
    let curr = head; // Current node.
    let next = null; // Next node (for reversal purposes).
    let counter = 1;
    
    while (curr) {
        if (counter === m - 1) {
            var beforeMthNode = curr;
        }
        
        if (counter === m) {
            var mthNode = curr;
        }
        
        // Reversing the linked list from m to n:
        while (counter > m && counter <= n) {
            if (counter === n) {
                var nthNode = curr;
            }
            // Reversing the current node:
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            counter++;
        }
        
        prev = curr;
        if (curr) {
            curr = curr.next;
        }
        
        counter++;
    }
    
    if (beforeMthNode) {
        beforeMthNode.next = nthNode;
    } else {
        head = nthNode;
    }
    
    mthNode.next = next;

    return head;
};