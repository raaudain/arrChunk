// Given an array and chunk size, divid the array into many subarrays
// where each subarray is of length size

function arrChunk(array, size){
  // Solution #1
  const chunked = [];

  for (let element of array){
    const last = chunked[chunked.length-1];
    console.log()

    if(!last || last.length === size){
      chunked.push([element])
    }
    else{
      last.push(element);
    }
  }

  return chunked;
}



// arrChunk([1,2,3,4], 2);
// arrChunk([1,2,3,4,5], 2);
arrChunk([1,2,3,4,5,6,7,8], 3);
// arrChunk([1,2,3,4,5], 4);
// arrChunk([1,2,3,4,5], 10);
