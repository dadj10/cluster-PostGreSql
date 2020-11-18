$(document)
		.ready(
				function() {

					$('#id_frm_login')
							.validate(
									{
										rules : {
											username : {
												required : true,
												minlength : 2,
												maxlength : 20
											},
											password : {
												required : true,
												minlength : 8,
												maxlength : 15
											},
											email : {
												required : true,
												email : true
											}
										},
										messages : {
											username : {
												required : "Veuillez saisir un nom d'utilisateur correcte",
												minlength : "La taille minimun est de dix (10) caract&egrave;res",
												maxlength : "La taille maximun est de vingt (20) caract&egrave;res"
											},
											password : {
												required : "Veuillez saisir un mot de passe correcte",
												minlength : "La taille minimun est de huit (8) caract&egrave;res",
												maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
											},
											email : {
												required : "Veuillez saisir un email correcte",
												email : "Veuillez saisir un email valide"
											}
										},
										errorElement : 'span',
										errorPlacement : function(error,
												element) {
											error.addClass('invalid-feedback');
											element.closest('.form-group')
													.append(error);
										},
										highlight : function(element,
												errorClass, validClass) {
											$(element).addClass('is-invalid');
										},
										unhighlight : function(element,
												errorClass, validClass) {
											$(element)
													.removeClass('is-invalid');
										}
									});
				});