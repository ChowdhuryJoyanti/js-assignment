// let numArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// getPositives(numArr);
// // output: [10,12,5,90,0,1]
// function getPositives(ar){
//     const posArr = ar.filter(num => num > -1);
//     return posArr;
// }


// function findingBadData(Data){
 
//     let getBadData = Data.filter(Data <= Data < 0);
//     return getBadData;
// }


//  let result =findingBadData([12 ,13,0,14,-12,23,-6,-5]);
//  console.log(result)









// findingBadData([-1 -23,4,5,6,-45])
// console.log(badData)












//    function findingBadData(Data){
//     // let number = 2;
//     if(Data >0){
//         console.log('Good Data');
//     }
//     else if (Data < 0) {
//         console.log('Bad Data');
//     }
//     else{
//         console.log('it is Zero')
//     }
  

//    }

//    findingBadData[12 ,13,0,14,-12,23,-6,-5]
//    console.log(findingBadData)


//    JavaScript program to check if a number is positive, negative, or zero:
//     let number = -5; if (number > 0) { console.log(number + " is a positive number"); } 
//     else if (number < 0) { console.log(number + " is a negative number"); } 
//     else { console.log(number + " is zero"); }



// function findingBadData([-2, -4, -5, -4 ,9])
// var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

// function getNegativeNumbers(array) {

//     var negatives = [];

//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negatives.push(array[i]);
//         }
//     }
//     return negatives;

// }
// console.log(getNegativeNumbers(myArray));


var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {
  return array.filter(function(value) {
    return value < 0;
  });
}
console.log(getNegativeNumbers(myArray));
