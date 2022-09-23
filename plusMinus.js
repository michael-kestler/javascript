// TODO: Given an array of integers, calculate the ratios of its elements that are positive,
//negative, and zero. Print the decimal value of each fraction on a new line with 6 places after
//the decimal.



function plusMinus(arr) {
//store array length inside of a variable
    let len = arr.length;


    //initialize the values
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    //traverse array and count number of positive, negative, and zero values

    for(let i = 0; i<=len; i++){
        if (arr[i] === 0){
            zeroCount++;
        } else if(arr[i] > 0){
            positiveCount++;
        } else if(arr[i] < 0) {
            negativeCount++
        }
        }
        //print the ratios of each value in the array and then set to 6th decimal place
        console.log((positiveCount/len).toFixed(6))
        console.log((negativeCount/len).toFixed(6))
        console.log((zeroCount/len).toFixed(6))
    }
