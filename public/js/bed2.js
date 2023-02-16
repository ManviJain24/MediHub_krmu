document
  .getElementById("submitButton")
  .addEventListener("click", fetchBedData);
const result = document.getElementById("results");
const button = document.getElementById("submitButton");
const sendEmail = require("../js/sendEmail");
const Sendmail = require("../js/sendEmail");
function fetchBedData() {

  const form = document.getElementById("register").elements;
  const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
  const prefCity = form.city.value;
  const recvEmail = form.email.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toLowerCase()
  );
  const city = prefCity.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
  console.log(city);
  console.log(recvEmail);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let bedcount;

      bedcount = 0;
      for (let x of json.data.medicalColleges) {
        if (x.city === city) {
          bedcount = bedcount + x.hospitalBeds;
          console.log(bedcount);
        }
      }
      if (bedcount === 0) {
        swal("Sorry, No bed found");
      } else {
        if (confirm("Confirm booking") == true) {
          swal("You will recieve a confirmation mail");
          // sendEmail()
        } else {
          swal("You canceled!");
        }
      }
    });
    // next()
}
// module.export = fetchBedData;
