var jvalidate_create = $("#jvalidate_create")
		.validate(
				{

					rules : {
						civilite : {
							required : true
						},
						role : {
							required : true
						},
						nom : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						prenoms : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						telephone : {
							required : true,
							minlength : 8,
							maxlength : 11
						},
						mobile : {
							required : true,
							minlength : 8,
							maxlength : 11
						},
						email : {
							required : true,
							email : true
						},
						username : {
							required : true,
							minlength : 2,
							maxlength : 50
						},
						password : {
							required : true,
							minlength : 8,
							maxlength : 15
						}
					},
					messages : {
						civilite : {
							required : "Veuillez saisir une civilit&eacute; correcte"
						},
						role : {
							required : "Veuillez saisir un r&ocirc;le correcte"
						},
						nom : {
							required : "Veuillez saisir un nom correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						prenoms : {
							required : "Veuillez saisir un pr&eacute;noms correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						telephone : {
							required : "Veuillez saisir un num&eacute;ro t&eacute;l&eacute;phone correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de onze (11) caract&egrave;res"
						},
						mobile : {
							required : "Veuillez saisir un num&eacute;ro mobile correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de onze (11) caract&egrave;res"
						},
						email : {
							required : "Veuillez saisir un e-mail correcte",
							email : "Veuillez saisir un e-mail valide"
						},
						username : {
							required : "Veuillez saisir un login correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
						},
						password : {
							required : "Veuillez saisir un mot de passe correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
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
						civilite : {
							required : true
						},
						role : {
							required : true
						},
						nom : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						prenoms : {
							required : true,
							minlength : 2,
							maxlength : 30
						},
						telephone : {
							required : true,
							minlength : 8,
							maxlength : 11
						},
						mobile : {
							required : true,
							minlength : 8,
							maxlength : 11
						},
						email : {
							required : true,
							email : true
						},
						username : {
							required : true,
							minlength : 2,
							maxlength : 50
						}/*,
						password : {
							required : true,
							minlength : 8,
							maxlength : 15
						}*/
					},
					messages : {
						civilite : {
							required : "Veuillez saisir une civilit&eacute; correcte"
						},
						role : {
							required : "Veuillez saisir un r&ocirc;le correcte"
						},
						nom : {
							required : "Veuillez saisir un nom correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						prenoms : {
							required : "Veuillez saisir un pr&eacute;noms correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
						},
						telephone : {
							required : "Veuillez saisir un num&eacute;ro t&eacute;l&eacute;phone correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de onze (11) caract&egrave;res"
						},
						mobile : {
							required : "Veuillez saisir un num&eacute;ro mobile correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de onze (11) caract&egrave;res"
						},
						email : {
							required : "Veuillez saisir un e-mail correcte",
							email : "Veuillez saisir un e-mail valide"
						},
						username : {
							required : "Veuillez saisir un login correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de cinquante (50) caract&egrave;res"
						}/*,
						password : {
							required : "Veuillez saisir un mot de passe correcte",
							minlength : "La taille minimun est de huit (8) caract&egrave;res",
							maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
						}*/
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