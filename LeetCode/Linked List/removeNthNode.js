// **NOTE**: there is a much better way of doing this with O(1) space complexity.
// LeetCode Problem #19: Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Edge case: linked list is empty or only contains a single node.
    if (!head || !head.next) {
        return null;
    }
    
    const nodes = []; // Stores the nodes in the linked list.
    let current = head;
    
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    
    // Removing the tail node.
    if (n === 1) {
        nodes[nodes.length - 2].next = null;
        return head;
    }
    
    // Removing the head node.
    if (n === nodes.length) {
        return nodes[1]; // New head of the linked list.
    }
    
    nodes[nodes.length - 1 - n].next = nodes[nodes.length - n + 1];
    return head;
};