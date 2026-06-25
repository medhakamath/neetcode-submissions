class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        var count=0;
        for(let i=0;i<details.length;i++){
            var ageArr=[];
            var age = parseInt(details[i].slice(11,13),10);
            if(age>60){
                ageArr.push(age);
                count++;
            }
            
        }
        return count;
    }
}
