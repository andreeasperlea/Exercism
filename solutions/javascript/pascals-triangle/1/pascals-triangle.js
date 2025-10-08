//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n===0) return [];
  const triangle=[[1]];
  for(let i=1;i<n;i++){
    const prevRow=triangle[i-1];
    const newRow=[1];
    for(let j=1;j<prevRow.length;j++){
      newRow.push(prevRow[j-1]+prevRow[j])
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
};
