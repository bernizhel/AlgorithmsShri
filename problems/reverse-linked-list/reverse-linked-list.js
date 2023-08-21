// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

export function reverseList(head) {
    let temp = head.next;
    let curr = head.next;
    head.next = null;
    while (curr.next !== null) {
        temp = curr.next;
        curr.next = head;
        head = curr;
        curr = temp;
    }
    curr.next = head;
    return temp;
}
