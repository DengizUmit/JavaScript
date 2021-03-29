/* 1- Matematiksel Operatörler */

var x  = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x-y);
console.log(y/x);
console.log(x*y);
console.log(x*y+z);
console.log(x*(y+z));

/*x++;
x--;
console.log(x);*/

/* 2- Karşılastırma Operatörleri */

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>=z);
console.log(x==z);
console.log(x=="10");
console.log(x==="10");
console.log(x!=z);

/* 3- Mantıksal Operatörler */

/* && (and) Operatörü */

console.log((20>10) && (30<=20));

/* || (or) Operatörü */

console.log((20>10) || (30<=20));

/* ! (not) Operatörü */

console.log(!(x>z));
