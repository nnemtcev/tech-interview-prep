// LeetCode Problem #206: Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * ITERATIVE SOLUTION:
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null; // Previous node.
    let curr = head; // Current node.
    let next = curr; // Node after curr.
    
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
};

// RECURSIVE SOLUTION:
// Back to Back SWE has a great video covering this problem.

let newHead = null;

var reverseListRec = function(prev, curr) {
    if (!curr) {
        newHead = prev;
        return;
    }
    
    reverseListRec(curr, curr.next);
    curr.next = prev;
}

var reverseList = function(head) {
    reverseListRec(null, head);
    return newHead;
}