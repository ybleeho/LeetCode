/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(n) {
    var prev = null
    while (n)
        [n.next, n, prev] = [prev, n.next, n]

    return prev ;
};

