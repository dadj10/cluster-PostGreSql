

$(document).ready(function() {
	
	$('#id_frm_forgetpassword_update').validate({
		rules : {
			
			password : {
				required : true,
				minlength : 8,
				maxlength : 10
			},
			confirme : {
				required : true,
				minlength : 8,
				maxlength : 10
			}
		},
		messages : {
			
			password : {
				required : "Veuillez saisir un mot de passe correcte",
				minlength : "La taille minimun est de huit (8) caract&eacute;res",
				maxlength : "La taille maximun est de dix (10) caract&eacute;res"
			},
			confirme : {
				required : "Veuillez saisir un mot de passe de confirmation correcte",
				minlength : "La taille minimun est de huit (8) caract&eacute;res",
				maxlength : "La taille maximun est de dix (10) caract&eacute;res"
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