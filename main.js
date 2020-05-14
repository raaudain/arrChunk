// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

function arrChunk(array, size){
  // Solution #1
  const chunked = [];

  for (let element of array){
    // For checking if array is empty or at size limit
    const isAtLimit = chunked[chunked.length-1];

    if(!isAtLimit || isAtLimit.length === size){
      chunked.push([element])
    }
    else{
      isAtLimit.push(element);
    }
  }

  return chunked;


  // Solution #2
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    // Moves index to next chunk
    index += size;
  }

  return chunked;
}



// arrChunk([1,2,3,4], 2);
// arrChunk([1,2,3,4,5], 2);
arrChunk([1,2,3,4,5,6,7,8], 3);
// arrChunk([1,2,3,4,5], 4);
// arrChunk([1,2,3,4,5], 10);
