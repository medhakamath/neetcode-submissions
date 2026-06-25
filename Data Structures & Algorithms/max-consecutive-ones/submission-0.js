class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        var max =0 ; var count=0;
        for(const num of nums){
            count= num===1 ? count+1 : 0;
            max=Math.max(max,count);
        }
        return max;
    }
}
