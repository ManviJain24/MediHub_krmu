const donors= document.getElementById("donors");

const url = 'http://localhost:8080/api';

fetch(url).then((Response) => Response.json()).then((json) => {

var temp= "<li>";
json.member.forEach(element => {
    temp+= "<h1> " + element.name +  "</h1> " + "<h1>Age: " + element.age + "</h1>" +  "<h3>Gender: " + element.gender + "</h3>" + "<h3>Blood Group: " + element.Blood_Group + "</h3>" + "<br/>";
});
temp+="</li>";


donors.innerHTML= temp;

});