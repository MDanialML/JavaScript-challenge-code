let arr = [1,0,4,0,3,0,2,7,4,0,5,0];

function moveZeros(arr)
{
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] === 0 && arr.splice(i,1) && arr.push(0);
        // let isZero = arr[i] === 0;
        // if(isZero)
        // {
        //     zeroCount++;
        //     arr.splice(i,1);
        //     i--;
        // }
    }
    // for(let i = 0; i < zeroCount; i++)
    // {
    //     arr.push(0);
    // }
    
    return arr;
}
console.log(moveZeros(arr));