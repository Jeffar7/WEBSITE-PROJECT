function validation() {
	if (!checkNameIsFilled()) {//Done 1
		alert('Name must be filled!');
		event.preventDefault();
	}
	else if (!CheckEmail()) {//Done 6 
		event.preventDefault();
	}
	else if (checkNameIsNumber()) {//Done 5
		alert("Name can't contain numbers!");
		event.preventDefault();
	}
	else if (!checkRateIsFilled()) {//Done 1
		alert("Rate must be filled!");
		event.preventDefault();
	}
	else if (!checkCommentsWordsMoreThanFive()) {//Done 2
		alert("Comments must be contained more than 5 words!");
		event.preventDefault();
	}
	else if (!checkFeedbacksCharactersMoreThanTwenty()) {//Done 2
		alert("Feedbacks must be contained with more than 20 characters!");
		event.preventDefault();
	}
	else if (!publishConfirmation()) {//Done 3
		alert("Please Select Your Publish Confirmation");
		event.preventDefault();
	}
	else if (!checkedBox()) {//Done 4
		alert("Please Check Agree terms and conditions");
		event.preventDefault();
	}
	else {
		alert("Your response have been saved");
	}
}

function checkNameIsFilled() {
	var name = document.getElementById('name').value;
	if (name == '') {
		return false;
	}
	else {
		return true;
	}
}

function checkNameIsNumber() {
	var name = document.getElementById('name').value;
	var nameIsNumber = false;

	for (let i = 0; i < name.length; i++) {
		if (!isNaN(name[i])) {
			nameIsNumber = true;
		}
	}

	if (nameIsNumber == true) {
		return true;
	}
	else {
		return false;
	}
}

function checkRateIsFilled() {
	var rate = document.getElementById('rate').value;

	if (rate == ' ') {
		return false;
	}
	else {
		return true;
	}
}

function CheckEmail(){
	var email = document.getElementById("email").value;
	var countAt = 0;
	var countDot = 0;

	for (var i = 0; i < email.length; i++) {
		if(email[i]=='@'){
			countAt++;
		}
		if(email[i]=='.'){
			countDot++;
		}
	}
	if(email.length < 15){
		alert("Email length must more than 14");
		return false;
	}
		
	else if(email.indexOf("@") + 1 == email.indexOf(".")){
		alert("Email character ‘@’ must not be next to’.’");
		return false;
	}
		
	else if(email.startsWith(".") || email.startsWith("@")){
		alert("Email must not starts with ‘@’ and ‘.’");
		return false;
	}
		
	else if(countAt != 1 || countDot != 1){
		alert("Email must not contains more than 1 ‘@’ and ‘.’.");
		return false;
	}
		
	else if(!email.endsWith(".com")){
		alert("Email must end with ‘.com’");
		return false;
	}
	else{
		return true;
	}
}

function checkCommentsWordsMoreThanFive() {
	var comments = document.getElementById('comments').value;
	if(comments.length <= 5){
		return false;
	}
	else{
		return true;
	}
}

function checkFeedbacksCharactersMoreThanTwenty() {
	var feedbacks = document.getElementById('feedbacks').value;
	if(feedbacks.length <= 20){
		return false;
	}
	else{
		return true;
	}

}

function publishConfirmation() {
	if(document.getElementById("yes").checked == false && document.getElementById("no").checked == false){
		return false;
	}
	else{
		return true;
	}
}

function checkedBox(){
	if(document.getElementById("check").checked == false){
		return false;
	}
	else{
		return true;
	}
}

// Prevent space input for 'E-mail'
function checkSpace(event) {
	if (event.which == 32) {
		event.preventDefault();
		return false;
	}
}