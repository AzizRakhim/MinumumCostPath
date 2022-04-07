let arr = [
  [1, 1, 1, 1, 1], 
  [3, 100, 100, 100, 100],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1]
];

function minPathSum(arr){ 
  for(let i = 1; i < arr[0].length; i++){
    arr[0][i] += arr[0][i-1]; 
  }
  
  for(let i = 1; i < arr.length; i++){
    arr[i][0] += arr[i-1][0]; 
  }

  for(let i = 1; i < arr.length; i++){
    for(let j = 1; j < arr[i].length; j++){
      arr[i][j] += Math.min(arr[i-1][j], arr[i][j-1]);
    }
  }

  return arr[arr.length - 1][arr[0].length - 1];
}

console.table(arr);
console.log(minPathSum(arr));
