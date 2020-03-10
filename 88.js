
// 88. Merge Sorted Array
// Easy

// 1702

// 3618

// Add to List

// Share
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


// WIP

var merge = function(nums1, m, nums2, n) {
  let ind1 = 0, ind2 = 0;
  while(m | n) {
      if (nums1[ind1] <= nums2[ind2]) {
          ind1++;
          m--;
      } else {
          nums1.splice(ind1,0, nums2[ind2]);
          nums1.pop();
          m--;
          n--;
          ind1++;
          ind2++;
      }
  }
};
merge([1,2,3,0,0,0],3,[2,5,6],3)