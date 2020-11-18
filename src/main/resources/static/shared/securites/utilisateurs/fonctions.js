
function selectServiceByCompte(){
	debugger;

	var username = $('#societe').val();
	
	//alert(username);
	
	if(username =='All'){
		var champSelectCompte = document.getElementById("compte");
		champSelectCompte.innerHTML = null;
		champSelectCompte.options[0] = new Option(
				'Tous les services', '');
		return
	}

	$.ajax({                           
		url : "http://localhost/smsapi/findCompteBySocieteUsername/" + username,
		type : 'GET',
		dataType : 'json',
		success : function(json) {

			var jsonData = json;
			var champSelectCompte = document.getElementById("compte");

			if (jsonData.length > 0) {
				var reponse = jsonData;				

				champSelectCompte.innerHTML = null;
				champSelectCompte.options[0] = new Option(
						'Tous les services', '');
				var optlistCpt = champSelectCompte.options.length;

				for ( var key in reponse) {
					var compte = reponse[key];

					champSelectCompte.options[optlistCpt] = new Option(
							compte.designation +' ('+ compte.compte+')', compte.compte);
					optlistCpt = optlistCpt + 1;
				}
			} else {
				// var champSelectQuartier =
				// document.getElementById("ID_QUARTIER_UPDATE");
				champSelectCompte.innerHTML = null;
				champSelectCompte.options[0] = new Option(
						'Tous les services', '');
			}
		},
		error : function(data, status, er) {
			console.log(data);
			console.log(status);
			console.log(er);
		}
	});	
}



