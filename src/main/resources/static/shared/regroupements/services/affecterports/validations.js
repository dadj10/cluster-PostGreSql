var jvalidate_create = $("#jvalidate_create")
		.validate(
				{
					rules : {						
						nom : {
							required : true,
							minlength : 2,
							maxlength : 50
						},
						description : {
							required : true,
							minlength : 1,
							maxlength : 300
						}
					},
					messages : {
						
						nom : {
							required : "Veuillez saisir un nom de service correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
						},
						centreImputation : {
							required : "Veuillez saisir une description correcte",
							minlength : "La taille minimun est un (1) caract&egrave;res",
							maxlength : "La taille maximun est de trois-cent (300) caract&egrave;res"
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

var jvalidate_update = $("#jvalidate_update")
		.validate(
				{
					rules : {						
						nom : {
							required : true,
							minlength : 2,
							maxlength : 50
						},
						description : {
							required : true,
							minlength : 1,
							maxlength : 300
						}
					},
					messages : {
						idPole : {
							required : "Veuillez s&eacute;lectionner un p&ocirc;le"
						},
						nom : {
							required : "Veuillez saisir un nom de service correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
						},
						centreImputation : {
							required : "Veuillez saisir une description correcte",
							minlength : "La taille minimun est un (1) caract&egrave;res",
							maxlength : "La taille maximun est de trois-cent (300) caract&egrave;res"
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
