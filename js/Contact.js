function validate() {
	var phoneNumber = $("#phone").val();
	if (phoneNumber.length > 0){
	if (isNaN(phoneNumber) || phoneNumber.length != 10){
		alert("Phone number is not valid.");
		return false;
	}
	}

	var zip = $("#zipCode").val();
	if (zip.length > 0){
	if (isNaN(zip) || zip.length != 5){
		alert("Zip code is not valid.");
		return false;
	}
	}
}