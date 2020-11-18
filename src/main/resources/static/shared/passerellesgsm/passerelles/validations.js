var jvalidate_create = $("#jvalidate_create")
		.validate(
				{
					rules : {
						idSociete : {
							required : true
						},
						nom : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						centreImputation : {
							required : true,
							minlength : 1,
							maxlength : 50
						}
					},
					messages : {
						idSociete : {
							required : "Veuillez s&eacute;lectionner une soci&eacute;t&eacute;"
						},
						nom : {
							required : "Veuillez saisir un nom correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						centreImputation : {
							required : "Veuillez saisir un centre d'imputation correcte",
							minlength : "La taille minimun est un (1) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
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
						idPole : {
							required : true
						},
						idSociete : {
							required : true
						},
						nom : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						centreImputation : {
							required : true,
							minlength : 1,
							maxlength : 50
						}
					},
					messages : {
						idPole : {
							required : "Veuillez s&eacute;lectionner un p&ocirc;le"
						},
						idSociete : {
							required : "Veuillez s&eacute;lectionner une soci&eacute;t&eacute;"
						},
						nom : {
							required : "Veuillez saisir un nom correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						centreImputation : {
							required : "Veuillez saisir un centre d'imputation correcte",
							minlength : "La taille minimun est un (1) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
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
