function pqFormel(p, q) {
    var x1 = p / -2 + Math.sqrt(Math.pow(p / 2, 2) - q);
  var x2 = p / -2 - Math.sqrt(Math.pow(p / 2, 2) - q);
  return   x1 + ", " + x2 ;
}

module.exports = {pqFormel};