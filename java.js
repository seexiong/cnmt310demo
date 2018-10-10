function validateForm(){
	
	var x = document.forms["contactUs"]["email"].value;
	if (x == ""){
		alert("Please provide your email.");
		return false;
	}
	
	var y = document.forms["contactUs"]["comments"].value;
	if (y == ""){
		alert("Please describe your issue.");
		return false;
	}
}