var btnSendMail = document.getElementById('send-mail');
var yourName = document.getElementById('yourName');
var yourEmail = document.getElementById('yourEmail');
var emailMessage = document.getElementById('emailMessage');

btnSendMail.addEventListener('click', function() {

	if (yourName.value === "" || yourEmail.value === "" || emailMessage.value === "") {
		alert("Please fill all your form data correctly");

		return true;
	} else {
		alert("Thank You! Your Email has been Sent");

		return true;
	}
});