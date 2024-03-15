// let naame = "tanoli";
// let start = 0;
// let end = naame.length - 1;
// while (start <= end) {
//     let temp = naame[start];
//     naame[start] = naame[end];
//     naame[end] = temp;
//     start++;
//     end--
// }
// console.log(naame);

// // console.log(naame);


// str[11] = 'D'
// let char = str.pop
// console.log(char);
let str = "WHO YOU LOVE"
let arr = Array.from(str);
// console.log(arr);
const len = arr.length
let start = 0
let end = len - 1
while(start < end)
{
    let left = arr[start]
    arr[start] = arr[end]
    arr[end] = left
    start++
    end--
}
console.log(arr);
let newString = arr.join()
console.log(newString);