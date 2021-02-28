
//Comunicando con el servidor de GH
let consulta = new XMLHttpRequest()
consulta.open('GET', 'https://api.github.com/users/johary1985/repos', true)


//Creando la funcion JSON
consulta.onload = function () {
  var data = JSON.parse(this.response);
  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.id + '</td>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.url + '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '</tr>';
  });
  $('tbody').html(statusHTML);
}

// Enviar la respuesta
consulta.send();