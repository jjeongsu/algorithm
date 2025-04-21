/**
 * @param {string} : 괄호로 이루어진 문자열
 * @return {number} : 가장 긴 연속된 올바른 괄호의 길이
 *
 */
var longestValidParentheses = function(s) {
    let max = 0 ;
    let stack = [-1];
    s.split('').forEach((paranth, index) => {
        if(paranth === '('){
            stack.push(index);
        }else {
            stack.pop();
            if(stack.length === 0 ){
                stack.push(index);
            }else{
                const top = stack[stack.length -1];
                max = Math.max(max, index - top);
            }
        }
    })
    return max;
};

const result1 = longestValidParentheses(")()())")
const result2 = longestValidParentheses("()(()")
const result3 = longestValidParentheses("()(((()")
console.log(result1, result2, result3)
