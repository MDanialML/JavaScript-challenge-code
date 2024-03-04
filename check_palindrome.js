let naame = "ajaaea";
let start = 0;
let end = naame.length - 1;
while (start <= end) {
    if(naame[start] != naame[end])
    {
        console.log("NOt a palindrome");
        return;
    }
    start++;
    end--
}
console.log("String is a palindrome");