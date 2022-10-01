const ftoc = function(far) {
  let cel = (far - 32) * 5 / 9;
  return Math.round(cel*10)/10; 
};

const ctof = function(cel) {
  let far = (cel * 1.8) + 32;
  return Math.round(far*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
