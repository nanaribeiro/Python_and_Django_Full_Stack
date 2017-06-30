//Ask questions
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("What is your height in centimeters?");
var petName = prompt("What is your pet's name?");
alert("Thanks for the information!");
//If the first letter of the first name and last name are equal
//and if the age is exclusive between 20 and 30
//and height is at least 170 centimeters
//and pet name ends with y then it is consider a spy
if (firstName[0] == lastName[0] && age > 20 && age < 30 && height>=170 && petName[petName.length-1]=="y"){
  console.log("Agent 007, please go to Madri where your next mission awaits.");
}
