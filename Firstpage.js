var twoSum = function(nums, target) {
  let leftP = 0;
  let rightP = 1;
  while(leftP < nums.length) {
      if (nums[leftP] + nums[rightP] === target) {
          return [leftP, rightP];
      }
      if (rightP >= nums.length) {
          leftP++;
          rightP = leftP + 1;
          continue;
      }
      rightP++;
  }
  
};

var addTwoNumbers = function(l1, l2) {
  //could make another helper function that will do the math and returns the values
    
  function addTwoNumbershelper(ll1,ll2) {
      if (!ll1.next && !ll2.next) {
          let carryOver = Math.floor((ll1.val + ll2.val)/10);
          ll2.val = (ll1.val + ll2.val) % 10;
          return carryOver;
      }
      let returnVal = addTwoNumbershelper(ll1.next,ll2.next)
      let carryOver = Math.floor((ll1.val + ll2.val + returnVal)/10);
      ll2.val = (ll1.val + ll2.val) % 10;
      return carryOver;
  }
  addTwoNumbershelper(l1,l2)
  return l2;
};

var isPalindrome = function(x) {
  let leftP = 0;
  let str = x.toString();
  let rightP = str.length - 1;
  
  while(leftP < rightP) {
      if(str[leftP] !== str[rightP]){
          return false;
      }
      leftP++;
      rightP--;
  }
  return true;
};