function Rectangle (width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

var rect = new Rectangle (5, 6);
document.write (rect.area ());

function Square (length) {
    this.width = this.height = length;
}

Square.prototype =  Object.create (Rectangle.prototype);

var sq = new Square (4);
document.write (sq.area ());