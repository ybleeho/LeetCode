/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   let pre  =null
    let current = head
    while(current!=null){
       if(current.val===val){
           if(pre==null){
               head=current.next
           }else{
               pre.next=current.next
           }
       }else{
           pre = current
       }
       current=current.next
    }
    return head
};