function objConcat(obj) {
  return obj.reduce(function(result, current) {
    return Object.assign(result, current);
  }, {});
}
