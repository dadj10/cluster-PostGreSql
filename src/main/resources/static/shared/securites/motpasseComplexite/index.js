// Url : https://phppot.com/jquery/jquery-password-strength-checker/
function checkPasswordStrength() {
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	if ($('#password').val().length < 8) {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('weak-password');
		$('#password-strength-status').html("Faible (doit contenir au moins 8 caractères.)");
	} else {
		if ($('#password').val().match(number)
				&& $('#password').val().match(alphabets)
				&& $('#password').val().match(special_characters)) {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('strong-password');
			$('#password-strength-status').html("Fort");
		} else {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('medium-password');
			$('#password-strength-status')
					.html("Moyen (doit comprendre des caractères alphabétiques, des chiffres et des caractères spéciaux.)");
		}
	}	
};





function checkConformationPasswordStrength() {
	var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	
	if ($('#confirmation').val().length < 8) {
		$('#confirmation-strength-status').removeClass();
		$('#confirmation-strength-status').addClass('weak-password');
		$('#confirmation-strength-status').html("Faible (doit contenir au moins 8 caractères.)");
	} else {
		if ($('#confirmation').val().match(number)
				&& $('#confirmation').val().match(alphabets)
				&& $('#confirmation').val().match(special_characters)) {
			$('#confirmation-strength-status').removeClass();
			$('#confirmation-strength-status').addClass('strong-password');
			$('#confirmation-strength-status').html("Fort");
		} else {
			$('#confirmation-strength-status').removeClass();
			$('#confirmation-strength-status').addClass('medium-password');
			$('#confirmation-strength-status')
					.html("Moyen (doit comprendre des caractères alphabétiques, des chiffres et des caractères spéciaux.)");
		}
	}
};