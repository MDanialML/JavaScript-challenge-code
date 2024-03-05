let arr = [2,3,3,5,5,6,6,7,7,7];
function removeDuplicates(arr)
{
    let i = 0;
    for(let j = 1; j < arr.length; j++ )
    {
        if(arr[i] !== arr[j])
        {
            i++;
            arr[i] = arr[j];
        }
    }
    arr.length = i + 1;
}
removeDuplicates(arr);
console.log(arr);
