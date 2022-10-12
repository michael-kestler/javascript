//Maria plays college basketball and wants to go pro.
//Each season she maintains a record of her play.
//She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record
//for the season, and she begins counting from there.

// Given the scores for a season, determine the number
//  of times Maria breaks her records
// for most and least points scored during the season.



function breakingRecords(scores) {
    // Write your code here
    let minCount = 0;
    let maxCount = 0;
    let minScore = scores[0];
    let maxScore = scores[0];
    for(let i=0; i<scores.length; i++){
        if(scores[i] > maxScore){
            maxScore = scores[i];
            maxCount++;

        } else if(scores[i] < minScore){
            minScore = scores[i];
            minCount++;

        }
    }


    return[maxCount, minCount];
}
