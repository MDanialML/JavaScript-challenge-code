for(let i =0; i <10;i++)
{
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
for (var i = 0; i<10;i++)
{
    setTimeout(() => {
        console.log("second loop")
        console.log(i);
    }, 1000);
}