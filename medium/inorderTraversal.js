/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const tree = {
    val: 1,
    right: {
        val:2,
        left: {
            val: 3
        }
    }
}

var inorderTraversal = function(root) {
    let result = helper([], root)
    return result
};

var helper = (arr, root) =>{
    if(root === null)
        return arr;
    if(root.left)
        helper(arr, root.left)
    arr.push(root.val)
    if(root.right)
        helper(arr, root.right)

    return arr;
}

console.log(inorderTraversal(tree))
