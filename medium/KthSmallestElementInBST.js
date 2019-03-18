/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k){
    const result = [];
    preOrder(root,result);
    return result[k-1];
};

var preOrder = function (root,result) {
    if(root){
        preOrder(root.left,result);
        result.push(root.value);
        preOrder(root.right,result);
    }
}


var tree = {
    value: 3,
    left: {
        value: 1,
        right: {
            value: 2
        }
    },
    right: {
        value: 4,
    }
}

console.log(kthSmallest(tree,3));
