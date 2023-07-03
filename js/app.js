// 1) Write a program that takes a username. Convert and show the name in small letters in an Alert box.
// (e.g. User inputs RizwAn JamaL it will see in alert rizwan Jamal)

// let userInp = prompt("Enter Your Full Name.");
// let lowerCase = userInp.toLocaleLowerCase();
// alert(lowerCase);


// 2) Initialize an array with color names (Array length should be 5). First Log that array in your console HINT: push, pop, shift, unshift, splice

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array values in your browser using Alert (All the values should be listed in alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// let addStart = prompt("Enter color name to add the biginning of an array.");
// colorArr.unshift(addStart);
// alert("Updated Array Value added at the beginning: \n" + colorArr.join('\n'));

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// let addEnd = prompt("Enter color name to add the end of an array.");
// colorArr.push(addEnd);
// alert("Updated Array Value added at the end: \n" + colorArr.join('\n'));

// c. Add two more color to the beginning of the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// let addStart = prompt("Enter color1 name to add the start of an array.");
// let addStart1 = prompt("Enter color2 name to add the start of an array.");
// colorArr.unshift(addStart1, addStart);
// alert("Updated Array Value added at the end: \n" + colorArr.join('\n'));

// d. Delete the first color in the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// colorArr.shift();
// alert("Delete first value from an Array: \n" + colorArr.join('\n'));

// e. Delete the last color in the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// colorArr.pop();
// alert("Delete last value from an Array: \n" + colorArr.join('\n'));

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser using Alert (All the values should be listed in an alert)
// let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
// console.log("Actual Array:", colorArr);
// let addPos = +prompt("Enter position in number.");
// let addVal = prompt("Enter value.");
// colorArr.splice(addPos, 0, addVal);
// alert("Add the color to desired position/index: \n" + colorArr.join('\n'));

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr);
let addPosSt = +prompt("Enter Start position in number.");
let addPosEd = +prompt("Enter End position in number.");
colorArr.splice(addPosSt, addPosEd);
alert("Add the color to desired position/index: \n" + colorArr.join('\n'));