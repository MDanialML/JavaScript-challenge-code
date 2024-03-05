let arr = [1,2,3,4,5,6,7,8,9];
let k = 4;
// function rotateArray(array,numberOfShifts)
// {
//     for(let i = 0; i < numberOfShifts; i++)
//     {
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }
// console.log(rotateArray(arr,k));


function rotateArray(arr,numberOfShifts)
{
    let deleted = arr.splice(arr.length - numberOfShifts);
    for (let i = 0; i < deleted.length;i++)
    {
        arr.splice(i,0,deleted[i]);
    }
    return arr;
}
console.log(rotateArray(arr,k));