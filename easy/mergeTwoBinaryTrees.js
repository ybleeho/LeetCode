/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function TreeNode(val) {
      this.val = val;
      this.left = this.right = null
}

const mergeTrees = function(t1, t2) {
    if(TreeNode(t1).val==null&&TreeNode(t2).val==null){
        return null
    }
    int value = TreeNode(t1).value==null?0:


};

let t1 = [1,3,2,5]
let t2 = [2,1,3,null,4,null,7]
console.log(mergeTrees(t1,t2))