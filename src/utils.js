export const shuffleArray = (arr)=> { //credits to http://stackoverflow.com/a/12646864/4579279
  for (var i = arr.length - 1; i > 0; --i) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
