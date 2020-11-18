$(document)
		.ready(
				function() {

					$('#id_frm_passwordUpdateDate')
							.validate(
									{
										rules : {
											password : {
												required : true,
												minlength : 2,
												maxlength : 15
											},
											confirmer : {
												required : true,
												minlength : 2,
												maxlength : 15
											}
										},
										messages : {
											password : {
												required : "Veuillez saisir un mot de passe correcte",
												minlength : "La taille minimun est de huit (8) caract&egrave;res",
												maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
											},
											confirmer : {
												required : "Veuillez saisir un mot de passe de confirmation correcte",
												minlength : "La taille minimun est de huit (8) caract&egrave;res",
												maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
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