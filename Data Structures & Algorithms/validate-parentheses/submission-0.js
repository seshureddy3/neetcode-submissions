class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeBraces = {
            ")": "(",
            "]": "[",
            "}": "{"
        }

        for(let c of s) {
            if(closeBraces[c]) {
                if(stack.length > 0 && stack[stack.length - 1] === closeBraces[c]) {
                    stack.pop();
                } else{
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
