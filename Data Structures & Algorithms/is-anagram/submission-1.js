class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let word1 = s.split("").sort().join("");
        let word2 = t.split("").sort().join("");
        console.log(word1);
        console.log(word2);
        if(word1===word2){
            return true;
        }
    return false;
}
}
