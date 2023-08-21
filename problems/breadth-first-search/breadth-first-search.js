// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree) {
    const result = [];
    const queue = [tree];
    while (queue.length !== 0) {
        const current = queue.shift();
        result.push(current.val);
        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }
    return result;
}
