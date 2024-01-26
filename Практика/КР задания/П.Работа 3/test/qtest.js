
var text=window.prompt("Как вас зовут?"); 
 
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const question2 = document.getElementById("2");
let question1 = document.getElementById("1");

let answer11= document.getElementById("1.1");
let answer12= document.getElementById("1.2");
let answer13= document.getElementById("1.3");
let answer14= document.getElementById("1.4");
console.log(answer11.value);

let answer21= document.getElementById("2.1");
let answer22= document.getElementById("2.2");
let answer23= document.getElementById("2.3");
let answer24= document.getElementById("2.4");



    switch (question1.value)
{
    case question1.value=="1":answer11.style.color="green";
    
    case question1.value=="2":answer12.style.color="red";
        
    case question1.value=="3":answer13.style.color="red";
    
    case question1.value=="4":answer14.style.color="red";
}

switch (question2.value)
{
    case question2.value=="1":answer21.style.color="green";
    
    case question2.value=="2":answer22.style.color="red";
        
    case question2.value=="3":answer23.style.color="red";
    
    case question2.value=="4":answer24.style.color="red";
}

  });
  

//elem.style.color = "red";