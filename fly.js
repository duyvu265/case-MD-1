let anh = document.getElementById("demo");

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
        anh.style.left = parseInt(anh.style.left) - 100 + 'px';

    }
    if (e.keyCode === 38) {
        anh.style.top = parseInt(anh.style.top) - 100 + 'px';


    }
    if (e.keyCode === 39) {
        anh.style.left = parseInt(anh.style.left) + 100 + 'px';

    }
    if (e.keyCode === 40) {
        anh.style.top = parseInt(anh.style.top) + 100 + 'px';

    }

});


let a = document.getElementById("1");
let b = document.getElementById("2");
let c = document.getElementById("3");
let d = document.getElementById("4");
let e = document.getElementById("5");
let f = document.getElementById("6");
let g = document.getElementById("7");
let diem1 = 0;
let diem2 = 0;
let diem3 = 0;
let diem4 = 0;
let diem5 = 0;
let diem6 = 0;
let diem7 = 0;
let tong;


window.setInterval(() => {

    window.setInterval(() => {
        a.style.left = parseInt(a.style.left) + Math.random() *1.1 + 'px';
        if (parseInt(a.style.left) >= window.innerWidth - 130) {
            a.style.left = '50px';
            a.style.top=Math.random()*200+'px';
            diem1++;
        }
    }, Math.random() * 10);

    window.setInterval(() => {
        b.style.left = parseInt(b.style.left) + Math.random() *1.1 + 'px';
        if (parseInt(b.style.left) >= window.innerWidth - 130) {
            b.style.left = '50px';
            b.style.top=Math.random()*200+'px';
            diem2++;

        }
    }, Math.random() * 10);
    window.setInterval(() => {
        c.style.left = parseInt(c.style.left) + Math.random() *1.1 + 'px';
        if (parseInt(c.style.left) >= window.innerWidth - 150) {
            c.style.left = '50px';
            c.style.top=Math.random()*500+'px';
            diem3++;


        }
    }, Math.random() * 10);
    window.setInterval(() => {
        d.style.left = parseInt(d.style.left) + Math.random() *1.1 + 'px';
        if (parseInt(d.style.left) >= window.innerWidth - 150) {
            d.style.left = '50px';

            diem4++;

        }
    }, Math.random() * 10);
    window.setInterval(() => {
        e.style.left = parseInt(e.style.left) + Math.random() *1.1 + 'px';
        if (parseInt(e.style.left) >= window.innerWidth - 150) {
            e.style.left = '50px';
            e.style.top=Math.random()*500+'px';
            diem5++

        }
    }, Math.random() * 10);
    window.setInterval(() => {
        f.style.left = parseInt(f.style.left) + Math.random()  *1.1 + 'px';
        if (parseInt(f.style.left) >= window.innerWidth - 150) {
            f.style.left = '50px';
            f.style.top=Math.random()*500+'px';
            diem6++

        }
    }, Math.random() * 10);
    window.setInterval(() => {
        g.style.left = parseInt(g.style.left) + Math.random()  *1.1 + 'px';
        if (parseInt(g.style.left) >= window.innerWidth - 160) {
            g.style.left = '50px';
            g.style.top=Math.random()*500+'px';
            diem7++;
        }
    }, Math.random() * 1.5);
    if (parseInt(anh.style.left) <= 0) {
        anh.style.left = 100 + 'px';

    }
    if (parseInt(anh.style.top) <= 0) {
        anh.style.top = 70 + 'px';
    }
    if (parseInt(anh.style.left) >= window.innerWidth - 100) {
        anh.style.left = 1200 + 'px'
    }
    if (parseInt(anh.style.top) >= window.innerHeight - 100) {
        anh.style.top = 700 + 'px';
    }tong = diem1+diem2+diem3+diem4+diem5+diem6+diem7;
    document.getElementById("diem").innerHTML = tong;


} , Math.random() * 3000)








