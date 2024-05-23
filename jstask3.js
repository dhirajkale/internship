
function calculateAge() {
    let birthYear = document.getElementById("birthYear").value;
    let currentYear = document.getElementById("currentYear").value;
    let age = currentYear - birthYear;
    document.getElementById("result").innerHTML = `You are ${age} years old.`;
  }