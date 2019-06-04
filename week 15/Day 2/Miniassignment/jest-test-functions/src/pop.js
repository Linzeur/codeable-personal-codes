function popOwn(array) {
  let nArr = array.length - 1;
  let last_element = array[nArr];
  if (nArr >= 0) array.length = nArr;
  return last_element;
}

export default popOwn;
