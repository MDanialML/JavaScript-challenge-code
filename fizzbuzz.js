console.time("fizzbuzz solution");
for (let i = 1; i <= 100;i++)
{
    if(i % 3 == 0)
    {
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz");
    }
    else
    {
        console.log(i);
    }
}
console.timeEnd("fizzbuzz solution");

console.time("Short solution");
for(let j = 1; j<=100;j++)
{
    console.log(((j%3?'':"Fizz")+(j%5?'':"Buzz")) || j);
}
console.timeEnd("Short solution");