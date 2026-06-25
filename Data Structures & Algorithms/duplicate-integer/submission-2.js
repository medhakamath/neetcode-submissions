class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var num1=[];
        let i;
        for(i=0;i<nums.length;i++){
            if(num1.includes(nums[i])){
                return true;
            }
        num1.push(nums[i])
        }
        return false;
    }
}
