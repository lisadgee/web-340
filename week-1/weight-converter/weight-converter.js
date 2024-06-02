/**
 * Author:Lisa Gee
 * Date:6/1/24
 * File Name:weight-converter.js
 * Description:Create a Node.js script that converts pounds to kilograms. 
 * The script will take one command line argument, which is the weight in pounds, and print the converted
 * weight in kilograms to the console.
*/

"use strict";

// TODO: Implement the weight conversion logic here

 function main() {
    if(process.argv.length!=3){ //test that user entered something
      console.error("Usage: node weight-converter.js <pounds>");  //display error msg
      process.exit(1);  //exit with a non-zero error code
    }

     //Grab command line arg (minus 1st two default-path to executable and path to script) and store in variable
     const weightInPounds = process.argv[2];
     
    if(isNaN(weightInPounds)){ //test to see if a number was entered
      console.error("Usage: Input must be a number.");  //display error msg
      process.exit(1)  //exit with a non-zero error code
    
    }
    
       let convertedWeight = convertLBStoKilos(weightInPounds);

    //Print weight in kilograms to console rounded to two decimal places (done above)
    console.log(weightInPounds + " pounds is " + convertedWeight + " kilograms.")
  }
   
//Function to convert pounds to kilograms and format 2 decimal places
function convertLBStoKilos(pounds){
  return (pounds * 0.45359237).toFixed(2);
}

//call the main function
main();