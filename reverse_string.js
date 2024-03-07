let naame = "tanoli";
let start = 0;
let end = naame.length - 1;
while (start <= end) {
    let temp = naame[start];
    naame[start] = naame[end];
    naame[end] = temp;
    start++;
    end--
}
console.log(naame);

// console.log(naame);