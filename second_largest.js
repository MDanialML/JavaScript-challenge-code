function secondLargest(arr){
    let len = arr.length;
    let firstLargest = secLargest = Math.min(...arr);
    if(len < 2)
    {
        return "There must be 2 element to compare";
    }
    for (let i = 0; i <len;i++)
    {
        if(arr[i] > firstLargest)
        {
            secLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secLargest && arr[i] !== firstLargest)
        {
            secLargest = arr[i];
        }
    }
    if(firstLargest === secLargest && secLargest == Math.min(...arr))
    {
        return "All the element are same";
    }
    return secLargest;
}

console.log(secondLargest([1,6,5,9,7,6,3]));
