
// mục tiêu: kiểm tra va chạm giữa các vật thể bay và siêu nhân



class tam {
    constructor(rong, cao) {
        this.rong = rong;
        this.cao = cao;
// vi tri hinh tron
    }
}

class hinhtron {
    constructor(o, r) {
        this.o = o;
        this.r = r;
// tâm và bán kính
    }
}

function khoangcach(a1,) {
    return (a1.style.left - anh.style.left) * (a1.style.left - anh.style.left) + (a1.style.top - anh.style.top) * (a1.style.top - anh.style.top)

// } tính khoảng cách


    function checkvacham(a1,) {
        return ((a1.r + 50) * (a1.r + 50) < khoangcach(a1.o,))
    }

// check va chạm


    let p1 = new tam(a.style.left, a.style.top);
    let p2 = new tam(b.style.left, b.style.top);
    let p3 = new tam(c.style.left, c.style.top);
    let p4 = new tam(d.style.left, d.style.top);

    let p5 = new tam(e.style.left, e.style.top);
    let p6 = new tam(f.style.left, f.style.top);
    let p7 = new tam(g.style.left, g.style.top);


    let c1 = new hinhtron(p1, 50);
    let c2 = new hinhtron(p2, 50);
    let c3 = new hinhtron(p3, 50);
    let c4 = new hinhtron(p4, 50);
    let c5 = new hinhtron(p5, 50);
    let c6 = new hinhtron(p6, 50);
    let c7 = new hinhtron(p7, 50);

    if (checkvacham(c1 || c2 || c3 || c4 || c5 || c6 || c7)) {
        alert("thua cuoc");


    }
}

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// class Circle {
//     constructor(_o, _r) {
//         this.o = _o;
//         this.r = _r;
//     }
// }
//
// function distance2( A,  B) {
//     return (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);
// }
//
// function checkCollision( c1,  c2) {
//     return ((c1.r + c2.r) * (c1.r + c2.r) < distance2(c1.o, c2.o));
// }
//
// function main() {
//     let p1 = new Point(2.5, 6.6);
//     let p2 = new Point(3.7, 7.3);
//
//     let c1 = new Circle(p1, 2.5);
//     let c2 = new Circle(p2, 3.4);
//
//     if (checkCollision(c1, c2))
//         console.log("AB");
//     else
//         console.log("A   B");
//
//     return 0;
// }
//
// main();