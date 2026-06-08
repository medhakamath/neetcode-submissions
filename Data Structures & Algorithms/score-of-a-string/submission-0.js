class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let current , next;
        var score=0;
        for(let i=0;i<s.length-1;i++){

            current = s.charCodeAt(i);
            next = s.charCodeAt(i+1);
            score+=Math.abs(next - current);
        }

        return score;
    }
}
