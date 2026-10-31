class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nums1=[];
        for(let i=0;i<nums.length;i++){
            if(nums1.includes(nums[i])){
                return true;
            }
            nums1.push(nums[i]);
        }
        return false;
    }
}
