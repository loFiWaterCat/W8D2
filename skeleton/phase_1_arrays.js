// Array.prototype.uniq = function() {
//   const bank = [];

//   this.forEach((el) => {
//     if (!bank.includes(el)) {
//       bank.push(el);
//     };
//   });
//   return bank;
// };


// dups = [1, 2, 2, 3, 5, 4, 3, 5, 5, 4];
// console.log(dups.uniq());

// Array.prototype.twoSum = function() {
//   const bigArray = [];

//   this.forEach(el1 => {
//     this.forEach(el2 =>{
//       if(this.indexOf(el2) > this.indexOf(el1) && el1 + el2 === 0) {
//         bigArray.push([this.indexOf(el1), this.indexOf(el2)]);
//       }
//     });

//   });
//   return bigArray;
// };


// dups = [1,2,-1,5,4,-3,3,-5,0];
// console.log(dups.twoSum());


Array.prototype.transpose = function(){
  const bigArr = [];
  for (let j = 0; j < this[0].length; j++){
    const subArr = [];
    for (let i = 0; i < this.length; i ++){
     subArr.push(this[i][j]);
    };
  bigArr.push(subArr);
  };
  return bigArr;
};

two_D = [[1,5,3,2],[3,5,7,2],[7,2,1,6]];
console.log(two_D.transpose());
