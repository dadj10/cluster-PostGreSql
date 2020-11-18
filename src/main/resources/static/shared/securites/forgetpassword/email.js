$(document)
		.ready(
				function() {

					$('#id_frm_destination')
							.validate(
									{
										rules : {
											nom : {
												required : true,
												minlength : 2,
												maxlength : 30
											}
										},
										messages : {
											nom : {
												required : "Veuillez saisir un nom correcte",
												minlength : "La taille minimun est de deux (2) caract&egrave;res",
												maxlength : "La taille maximun est de trente (30) caract&egrave;res"
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