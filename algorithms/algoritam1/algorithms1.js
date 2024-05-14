function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        console.log(i);
        total += i;
    }
    return total;
}

// console.log(addUpTo(6));

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log("j", j);
        }
    }
}

// console.log(addUpTo(6));


const mainDivs = document.querySelectorAll(".box");

function allDivs() {
    for (let i = 0; i < mainDivs.length; i++) {
        var b = mainDivs[i];
        Array.from(b.children).forEach(element => {
            console.log(element);
        });
    }
}

allDivs();
