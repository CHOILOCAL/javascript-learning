console.log(14 & 11); // 1110 & 1011 = 1010
console.log(~14); // ~1110 = -1111
console.log(14 | 11); // 1110 | 1011 = 1111
console.log(14 ^ 11); // 1110 ^ 1011 = 0101
console.log(2 << 2); // 0010 = 1000
console.log(14 >> 1); // 1110 = 111
console.log(14 >>> 2); // 1110 = 11

var imsi = ~14;
console.log(imsi.toString(2));
