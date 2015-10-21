Array.prototype.includes = function (target) {
  var result = false
  this.forEach(function (el) {
    if (el == target) {
      result = true
    }
  });
  return result;
}

Array.prototype.selects = function (cond) {
  var results = [];
  this.forEach(function (el) {
    if (cond(el)) {
      results.push(el);
    }
  });
  return results
}
