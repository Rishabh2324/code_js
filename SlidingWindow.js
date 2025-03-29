// We need to find maximum subset sum of n numbers
// Calculate first subset sum
// Assign first subset sum to maximum sum
// Assign first subset sum to temp sum
// Slide the window by removing 1st number from each window and andd next nmuber to that window
// Compare the temp with max sum and get maximum value
// Return maximum value
// Time complexity : O(n)
// Space complexity : O(1)
function maxSubArraySum(arr, num) {
    if (num > arr.length) return;
  
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
    return maxSum;
  }
  