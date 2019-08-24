/**
 * ADD TWO NUMBERS
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * FAST: 72.74% MEMORY: 34.72%
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let output = new ListNode(-1),
    dummy = output,
    sum = 0,
    carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    }
    dummy.next = new ListNode(sum);
    dummy = dummy.next;
    sum = carry;
    carry = 0;
  }

  return output.next;
};
