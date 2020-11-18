function findSlotByIdPasserelleGsm(idPasserelleGsm) {
	debugger;
	
	//alert(idPasserelleGsm);

	$.ajax({
		url : "http://localhost/smsapi/findSlotByIdPasserelleGsm/" + idPasserelleGsm,
		type : 'GET',
		dataType : 'json',
		success : function(json) {

			var jsonData = json;

			// alert(jsonData);
			var champSelectPuce = document.getElementById("idSlot");

			if (jsonData.length > 0) {
				var reponse = jsonData;

				champSelectPuce.innerHTML = null;
				champSelectPuce.options[0] = new Option('[Tous les slots]', '');
				var optlistCpt = champSelectPuce.options.length;

				for ( var key in reponse) {
					var slot = reponse[key];

					champSelectPuce.options[optlistCpt] = new Option(slot.nom,
							slot.idSlot);
					optlistCpt = optlistCpt + 1;
				}
			} else {
				champSelectPuce.innerHTML = null;
				champSelectPuce.options[0] = new Option('[Tous les slots]', '');
			}

		},
		error : function(data, status, er) {
			console.log(data);
			console.log(status);
			console.log(er);
		}
	});

}


function findPortByIdSlot(idSlot) {
	debugger;
	
	$.ajax({
		url : "http://localhost/smsapi/findPortByIdSlot/" + idSlot,
		type : 'GET',
		dataType : 'json',
		success : function(json) {

			var jsonData = json;

			var champSelectPort = document.getElementById("idPort");

			if (jsonData.length > 0) {
				var reponse = jsonData;

				champSelectPort.innerHTML = null;
				champSelectPort.options[0] = new Option('[Tous les ports]', '');
				var optlistCpt = champSelectPort.options.length;

				for ( var key in reponse) {
					var port = reponse[key];

					champSelectPort.options[optlistCpt] = new Option(port.nom,
							port.idPort);
					optlistCpt = optlistCpt + 1;
				}
			} else {
				champSelectPort.innerHTML = null;
				champSelectPort.options[0] = new Option('[Tous les ports]', '');
			}

		},
		error : function(data, status, er) {
			console.log(data);
			console.log(status);
			console.log(er);
		}
	});

}


function findPucesByIdOperateur(idOperateur) {
	debugger;
	
	//alert(idOperateur);

	$.ajax({
		url : "http://localhost/smsapi/findPucesByIdOperateur/" + idOperateur,
		type : 'GET',
		dataType : 'json',
		success : function(json) {

			var jsonData = json;

			// alert(jsonData);
			var champSelectPuce = document.getElementById("idPuce");

			if (jsonData.length > 0) {
				var reponse = jsonData;

				champSelectPuce.innerHTML = null;
				champSelectPuce.options[0] = new Option('[Toutes les puces]', '');
				var optlistCpt = champSelectPuce.options.length;

				for ( var key in reponse) {
					var puce = reponse[key];

					champSelectPuce.options[optlistCpt] = new Option(puce.nom,
							puce.idPuce);
					optlistCpt = optlistCpt + 1;
				}
			} else {
				champSelectPuce.innerHTML = null;
				champSelectPuce.options[0] = new Option('[Toutes les puces]', '');
			}

		},
		error : function(data, status, er) {
			console.log(data);
			console.log(status);
			console.log(er);
		}
	});

}

