class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        for(let num of nums){
            let count = nums.reduce((acc,val)=>
                acc + (num === val ? 1 : 0)
            , 0 );

            if(count>Math.floor(nums.length/2)){
            return num;
        }
        }
        return -1;
        
    }
    
}
