let arr = [
  [1, 1, 1, 1], 
  [5, 2, 2, 100],
  [9, 4, 2, 1]
];

function minPathSum(arr){ 
  let cols = arr[0].length;
  let rows = arr.length;
  let leftDown = Array(rows).fill(Array(cols).fill(0));
  leftDown[0][0] = arr[0][0];
  
  for(let i = 1; i < cols; i++){
    leftDown[0][i] = leftDown[0][i-1] + arr[0][i]; 
  }
  
  for(let i = 1; i < rows; i++){
    leftDown[i][0] = leftDown[i-1][0] + arr[i][0]; 
  }

  for(let i = 1; i < rows; i++){
    for(let j = 1; j < cols; j++){
      leftDown[i][j] = arr[i][j] + Math.min(leftDown[i-1][j], leftDown[i][j-1]);
    }
  }

  return leftDown[rows-1][cols-1];
}

console.table(arr);
console.log(minPathSum(arr));
