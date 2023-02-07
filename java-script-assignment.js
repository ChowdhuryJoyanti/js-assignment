//  Description :In this function firstlty I did 3 multiplication with parameter ,than added 10 with 
// multiplicationNumber and divided by 2 to  added  number than i did substraction 5 from 
// division number.

function mindGame (number1){
    if(typeof number1 !== "number"){
        return "Please enter a number";
    }
    
        let multiplicationNumber  = number1 * 3;
       let added = multiplicationNumber + 10;
       let division= added / 2;
       let substraction = division - 5;
        let result = substraction;
        return result;
 }
//  let substractionResult = mindGame(33)
//  console.log(substractionResult)



// // description: In this function I try to find the parameters
//  string number is odd or even .For this function I also declair a condition.



function evenOdd(Name){
    if(typeof Name !== "string"){
        return "Please enter a string";
    }
    
       const remainder= Name.length % 2;
       if(remainder === 0){
       return 'even';
       }
       else{
        return "odd";
    
    }
    
       }
    
    //   let myResult = evenOdd(6);
    //   console.log(myResult);


// // Descrption :In this function I took a parameter number then substract 7.then I give a condition that 
// if the substraction result is less than 7 than return the substraction
//  result.Otherwise ,It will double of the parameter input



function isLGSeven(number){
        let substractionResult = number - 7;
         if(substractionResult >7){
            let name = number*2
            return name;
  }
  else{
    return substractionResult;
  }
}

//    let result = isLGSeven(-15);
//    console.log(result);


// // Description :in this function i take some good and bad data as a parameter of an array .then go through
// for loop and send the bad data to the badData array and return badData length
function  findingBadData(numbers){
   
    let badData = [];
     for( let i =0; i < numbers.length; i++){
         let index = i;
         let element = numbers[index];
         if(element < 0 ){
            
         badData.push(element)
         }
     }
     return badData.length;
 
  }
        //  const myNumbers = [-6,-7,7,];
        //  const badData = findingBadData(myNumbers)
        //  console.log(badData)



     // Description : In this function I did multiplication the three friends gems and the power of diamond
// than added the multiplication result.Than I declare a function if the added number is greater than
// 2000 then substract 2000 .otherwise return the allfriends additon result.

function gemsToDiamond(firstFriend ,secondFriend, thirdFriend){
   
    let firstFriendDiamond = firstFriend * 21;
    let secondFriendDiamond = secondFriend * 32;
    let thirdFriendDiamond = thirdFriend * 43;
    let allFriendDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(allFriendDiamond >2000 ){
        return allFriendDiamond - 2000;
    }

    else  {
        return allFriendDiamond;
    } 
}
//  let result = gemsToDiamond(100, 5, 1)
//  console.log(result)
