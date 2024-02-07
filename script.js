// Assignment Code
var generateBtn = document.querySelector("#generate");
var allInOne = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-_+="
// console.log(lowerCaseList)



// Write password to the #password input
function writePassword() {
 let password = "";
  
 const length =9;

for (let i = 0; i < length; i++) {
 var num  = Math.floor(Math.random()*allInOne.length);
 password += allInOne[num];
  //[num] instaed of  .substring(num, num+1)
}
return password;
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click",  function() {
  document.getElementById("password").value = writePassword();
//.value instead of .innertext
  
  console.log(document.getElementById("password").innertext = writePassword())
})
