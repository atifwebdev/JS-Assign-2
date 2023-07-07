// 1) Write a program that takes a username. Convert and show the name in small letters in an Alert box.
// (e.g. User inputs mUhamMaD aTiF it will see in alert muhammad atif)

let userInp = prompt("Enter Your Full Name.");
let lowerCase = userInp.toLocaleLowerCase();
alert(lowerCase);


// 2) Initialize an array with color names (Array length should be 5). First Log that array in your console HINT: push, pop, shift, unshift, splice

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array values in your browser using Alert (All the values should be listed in alert)
let colorArr = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr);
let addStart = prompt("Enter color name to add the biginning of an array.");
colorArr.unshift(addStart);
alert("Updated Array Value added at the beginning: \n" + colorArr.join('\n'));

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr1 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr1);
let addEnd = prompt("Enter color name to add the end of an array.");
colorArr1.push(addEnd);
alert("Updated Array Value added at the end: \n" + colorArr1.join('\n'));

// c. Add two more color to the beginning of the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr2 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr2);
let addStart1 = prompt("Enter color1 name to add the start of an array.");
let addStart2 = prompt("Enter color2 name to add the start of an array.");
colorArr2.unshift(addStart2, addStart1);
alert("Updated Array Value added at the end: \n" + colorArr2.join('\n'));

// d. Delete the first color in the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr3 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr3);
colorArr3.shift();
alert("Delete first value from an Array: \n" + colorArr3.join('\n'));

// e. Delete the last color in the array. Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr4 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr4);
colorArr4.pop();
alert("Delete last value from an Array: \n" + colorArr4.join('\n'));

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr5 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr5);
let addPos = +prompt("Enter position in number.");
let addVal = prompt("Enter value.");
colorArr5.splice(addPos, 0, addVal);
alert("Add the color to desired position/index: \n" + colorArr5.join('\n'));

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser using Alert (All the values should be listed in an alert)
let colorArr6 = ["Black", "Green", "Blue", "Red", "Orange"];
console.log("Actual Array:", colorArr6);
let addPosSt = +prompt("Enter Start position in number.");
let addPosEd = +prompt("Enter End position in number.");
colorArr6.splice(addPosSt, addPosEd);
alert("Add the color to desired position/index: \n" + colorArr6.join('\n'));


// 3)Write a two dimensional for loop program that will print the following pattern. Get prompt from user & make identity matrix accordingly eg; if user enters 3 then output matrix will be of 3 x 3
const dimInp = +prompt("Enter Matrix Dimention here.");
for(let i=0; i<dimInp; i++){
    let txt = "";
    for(let j=0; j<dimInp; j++){
        if(i===j){
            txt += "1 ";
        }else{
            txt += "0 ";
        }
    } 
    console.log(txt);
}


// 4)Write a for loop program that will print the following patterns
for(let i=5; i>=1; i--){
    let num = "";
    for(let j=1; j<=i; j++){
        num += j;
    }
    console.log(num);
}

for(let i=5; i>=1; i--){
    let star = "";
    for(let j=1; j<=i; j++){
        star += "*";
    }
    console.log(star);
}


// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. Output should be "Islamabad"

let cityName = "Hyderabad";
console.log(cityName);
let res = document.querySelector("#result");
res.innerHTML = cityName.replace("Hyder", "Islam");