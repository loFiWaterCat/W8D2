Array.prototype.uniq = function() {
  const bank = [];

  this.forEach((el) => {
    if (!bank.includes(el)) {
      bank.push(el);
    };
  });
  return bank;
};


dups = [1, 2, 2, 3, 5, 4, 3, 5, 5, 4];
console.log(dups.uniq());
