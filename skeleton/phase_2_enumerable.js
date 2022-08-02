Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    };
};

let arr = [1, 2, 3, 4, 5];
// arr.myEach(console.log);
// arr.myEach(function(el) {console.log(el + 3)});

 
