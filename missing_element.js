function missingElement(arr)
{
    let missingNumber = [];
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    for(let i = minNum;i < maxNum;i++)
    {
        if(arr.indexOf(i) < 0)
        {
            missingNumber.push(i);
        }
    }
    return missingNumber;
}
console.log(missingElement([-3,5,9]));