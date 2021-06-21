/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    if(root.left){
        res = res.concat(inorderTraversal(root.left));
    }
    res.push(root.val);
    if(root.right){
         res = res.concat(inorderTraversal(root.right));
    }
    return res;
       
};