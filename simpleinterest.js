let p=10000;
let r=0.05;
let n=1;
let t=3;

let A=p*(1+r/n)**(n*t);

let compoundinterest=A-p;

console.log("the compound interest after"+t+"years"+compoundinterest);