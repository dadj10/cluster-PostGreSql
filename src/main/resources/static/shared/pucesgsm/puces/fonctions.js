function findPoleById(idPole) {
	debugger;

	// alert(idPole);

	$.ajax({
		url : "http://localhost/smsapi/findPoleById/" + idPole,
		type : 'GET',
		dataType : 'json',
		success : function(json) {

			var jsonData = json;
			
			//console.log(JSON.stringify(jsonData)); 
			
			$('#idPole_update').val(jsonData.idPole);
			$('#nom_update').val(jsonData.nom);
			$('#centreImputation_update').val(jsonData.centreImputation);
			$('#etat_updates').val(jsonData.etat);
			$('#dateCreation_update').val(jsonData.dateCreation);
			$('#dateModification_update').val(jsonData.dateModification);
			$('#idSociete_update').val(jsonData.societe.idSociete);
			
		},
		error : function(data, status, er) {
			console.log(data);
			console.log(status);
			console.log(er);
		}
	});
	
	
}
