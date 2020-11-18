var jvalidate_create = $("#jvalidate_create")
		.validate(
				{

					rules : {
						role : {
							required : true,
							minlength : 2,
							maxlength : 15
						},
						description : {
							required : true,
							minlength : 2,
							maxlength : 30
						}
					},
					messages : {
						role : {
							required : "Veuillez saisir un code correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
						},
						description : {
							required : "Veuillez saisir une description correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
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
						role : {
							required : true,
							minlength : 2,
							maxlength : 15
						},
						description : {
							required : true,
							minlength : 2,
							maxlength : 30
						}
					},
					messages : {
						role : {
							required : "Veuillez saisir un code correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de quinze (15) caract&egrave;res"
						},
						description : {
							required : "Veuillez saisir une description correcte",
							minlength : "La taille minimun est de deux (2) caract&egrave;res",
							maxlength : "La taille maximun est de trente (30) caract&egrave;res"
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