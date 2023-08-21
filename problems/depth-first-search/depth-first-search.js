// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// export function dfs(tree) {
//   const result = [];
//   const stack = [tree];
//   while (stack.length !== 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if (current.right !== null) {
//       stack.push(current.right);
//     }
//     if (current.left !== null) {
//       stack.push(current.left);
//     }
//   }
//   return result;
// }

export function dfs(tree) {
  if (tree === null) {
    return [];
  }

  return [tree.val].concat(dfs(tree.left)).concat(dfs(tree.right));
}
