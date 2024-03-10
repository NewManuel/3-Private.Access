// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capitolCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialsymbols = ["!","@","#","$","%","^","&","*","-","_","+","="];
var digits = [1,2,3,4,5,6,7,8,9,0];
// console.log(lowerCaseList)



// Write password to the #password input
function formPassword() {
 let password = "";
  
 const length ="";

for (let i = 0; i < length; i++) {
 var num  = Math.floor(Math.random()*allInOne.length);
 password += allInOne[num];
  //[num] instaed of  .substring(num, num+1)
}
return password;
}

function createPrompt() {
  var upper = prompt("Wouold you like to use uppercase characters? y/n");
  var lower = prompt("Do you want lowercase characters? y/n");
  var num = prompt("Do you want numbers? y/n");
  var special = prompt("Do you want special characters? y/n");

  if (upper === "y") {
    selectedList = uppercaseList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (lower === "y") {
    selectedList = alphList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (num === "y") {
    selectedList = numList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
  if (special === "y") {
    selectedList = specialList.concat(selectedList);
  } else {
    console.log("Wrong input!");
  }
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click",  function() {
  document.getElementById("password").value = formPassword();
//.value instead of .innertext
  
  console.log(document.getElementById("password").innertext = formPassword())
})
