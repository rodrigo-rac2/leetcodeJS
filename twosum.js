/**
 * Problem: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if(map.get(target - nums[i]) != null) {
            return new Array(map.get(target - nums[i]), i);
        }
        map.set(nums[i], i);
    }
    // var answer = []
    // for (var i = 0; i < nums.length; i++) {
    //     if ((target >= 0 && nums[i] <= target) || (target < 0) && (nums[i] >= target)) {
    //         for (var j = 0; j < nums.length; j++) {
    //             if (i == j) continue;
    //             else if (nums[i] + nums[j] == target) {
    //                 answer.push(i);
    //                 answer.push(j);
    //                 break;
    //             }
    //         }
    //         if (answer.length > 0) break;
    //     }
    // }
    // return answer;
};
