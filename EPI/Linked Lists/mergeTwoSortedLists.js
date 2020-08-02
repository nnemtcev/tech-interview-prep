// Question 7.1 in EPI: Merge Two Sorted Lists
// The key is to take advantage of the fact that both lists are sorted.
// When given information in a question and it's not obvious what to do w/ it, extrapolate as much as possible from the given information.

function mergeTwoSortedLists(head1, head2) {
    if (!head1 && !head2) {
        return null;
    }
    if (!head1) {
        return head2;
    }
    if (!head2) {
        return head1;
    }

    let curr1 = head1;
    let curr2 = head2;
    let tail;
    let newHead;

    if (curr1.data < curr2.data) {
        tail = curr1;
        newHead = curr1;
        curr1 = curr1.next;
    } else {
        tail = curr2;
        newHead = curr2;
        curr2 = curr2.next;
    }

    while (curr1 && curr2) {
        if (curr1.data < curr2.data) {
            tail.next = curr1;
            tail = tail.next;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            tail = tail.next;
            curr2 = curr2.next;
        }
    }

    if (!curr1) {
        tail.next = curr2;
    } else {
        tail.next = curr1;
    }

    return newHead;
}