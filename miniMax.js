// TODO: Given five positive integers, find the minimum and maximum values that
//can be calculated by summing exactly four of the five integers.
//Then print the respective minimum and maximum values as a single line of
//two space-separated long integers.



function miniMaxSum(arr) {

    let min = 0;
    let max = 0;

    arr.sort();

    for(let i = 1; i < arr.length; i++){
         max+=arr[i];
        }
        for(let i = 0; i < arr.length-1; i++){
            min+=arr[i];
        }

        console.log(min + " " + max);

    }
