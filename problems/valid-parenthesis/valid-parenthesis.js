// https://leetcode.com/problems/valid-parentheses/

export function isValid(str) {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    const stack = [];
    for (const char of str) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
            continue;
        }
        const current = stack.pop();
        if (map[current] !== char) {
            return false;
        }
    }
    return true;
}
