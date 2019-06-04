function everyOwn(array, callback) {
  let nArr = array.length;
  let con = 0;
  while (con < nArr) {
    if (!callback(array[con])) return false;
    con++;
  }
  return true;
}

export default everyOwn;
