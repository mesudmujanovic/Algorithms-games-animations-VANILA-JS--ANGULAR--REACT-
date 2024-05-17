// Given num = [2, 7, 11, 15], target = 9;

// Because nums[0] + nums[1] = 2 + 7 + 9;
// return [0,1];

const nums = [2, 15, 11, 7];
const target = 9;

for (let i = 0; i < nums.length; i++) { 
    const nums1 = nums[i]; 
    for (let j = 0; j < nums.length; j++) { 
        const nums2 = nums[j];
        const result = nums1 + nums2;
        if(result == 9){
            console.log("s",i, j);
        } else {
        }
    }
    break;
}

