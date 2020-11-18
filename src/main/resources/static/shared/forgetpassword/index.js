

$(document).ready(function() {
	
	$('#id_frm_forgetpassword').validate({
		rules : {
			email : {
				required : true,
				email : true
			}
		},
		messages : {
			email : {
				required : "Veuillez saisir un email correcte",
				email : "Veuillez saisir un email valide"
			}
		},
		errorElement : 'span',
		errorPlacement : function(error, element) {
			error.addClass('invalid-feedback');
			element.closest('.form-group').append(error);
		},
		highlight : function(element, errorClass, validClass) {
			$(element).addClass('is-invalid');
		},
		unhighlight : function(element, errorClass, validClass) {
			$(element).removeClass('is-invalid');
		}
	});
});