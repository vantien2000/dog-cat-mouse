
Cat.prototype.eat = function (mouse){
    this.stomach.push(mouse);
}
function Mouse(mouse){
    this.mouse = mouse;
}

var Miccky = new Mouse('Miccky');
Cat.eat(Miccky);
module.exports = Mouse;
