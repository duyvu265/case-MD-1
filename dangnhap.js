class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(_o, _r) {
        this.o = _o;
        this.r = _r;
    }
}

function distance2( A,  B) {
    return (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);
}

function checkCollision( c1,  c2) {
    return ((c1.r + c2.r) * (c1.r + c2.r) < distance2(c1.o, c2.o));
}

function main() {
    let p1 = new Point(2.5, 6.6);
    let p2 = new Point(3.7, 7.3);

    let c1 = new Circle(p1, 2.5);
    let c2 = new Circle(p2, 3.4);

    if (checkCollision(c1, c2))
        console.log("AB");
    else
        console.log("A   B");

    return 0;
}

main();