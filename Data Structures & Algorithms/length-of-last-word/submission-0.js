class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let wordArr = s.trim().split(" ");
        let lastWord = wordArr.length-1;
        return wordArr[lastWord].length;

    }
}
