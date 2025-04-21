/**
 * @param {string} : 괄호로 이루어진 문자열
 * @return {number} : 가장 긴 연속된 올바른 괄호의 길이
 *
 * example
 * ()(() : 4가 아니라 2
 * note : [ 1, 1, 0, 1, 1 ]
 */
var longestValidParentheses = function(s) {

    // 올바른 괄호인지 판단하여 Note를 작성
    const note = new Array(s.length); // 올바른 괄호이면1, 올바르지 않은 괄호이면 0
    const stack = [];
    s.split('').forEach((paranth, index) => {

        if(paranth === ')' && stack[stack.length-1]&&stack[stack.length-1][0] === '('){
            const [popedParanth, popedIndex]= stack.pop();
            note[index] = 1;
            note[popedIndex] = 1;
        }else{
            stack.push([paranth,index])
        }
    })

    while(stack.length >0){
        const [last, lastIndex] = stack.pop();
        note[lastIndex] = 0 ;
    }


    // note에서 연속적으로 나타나틑 1의 가장 긴 길이를 리턴
    // 🍀 연속적인 올바른 수열의 길이?
    // 1 -> 1 인경우 현재 길이에 +1
    // 0 -> 1 인경우 현재길이를 초기화 하고 1

    let max = 0 ; // 최종적으로 반환해야 하는 값
    let curr = 0 ;
    note.forEach((num, index) => {
        if(index == 0 ){
            if(num === 1) {curr += 1;
                max = Math.max(max, curr);}
            return ;
        }

        if(num === 1){
            const lastNum = note[index-1];
            if(lastNum === 1){
                curr += 1;
                max = Math.max(max, curr);
                return ;
            }else if(lastNum === 0 ){
                curr= 1;
                max = Math.max(max, curr);
            }
        }
    })

    return max;
};