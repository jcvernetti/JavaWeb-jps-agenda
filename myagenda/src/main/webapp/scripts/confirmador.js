/**
* Confirmação de exclusão de um contato
* 
* @author Professor Jose de Assis
* @param
*/

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?");
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon;
	}
}
