

let Table = function(dimen,color) {
    this.dimen = dimen;
    this.color = color;
}

Table.prototype.x=['ali','omar']

let t1= new Table('20*20', 'red');
console.log(t1.x);