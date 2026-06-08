class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
let i=0,j=0;
for(i=0;i<s.length;i++){
    if(s[i]===t[j]){
        j++;
    }
}

return t.length - j ;

    }
}
