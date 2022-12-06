'use scrict'

function getResults() {
	const userName = document.querySelector("#user-name").value;
	const passWord = document.querySelector("#user-password").value;
	alert("The username is " + userName + "and the password is " + passWord);
}
let button = document.querySelector("#log-in");
button.addEventListener("click", getResults);

