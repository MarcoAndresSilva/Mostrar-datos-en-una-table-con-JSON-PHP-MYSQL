const table = document.getElementById('cuerpo');
const opciones = {
  method: 'POST'
}

fetch('php/consulta.php', opciones)
  .then(response => response.json())
  .then(resultado => {
    console.log(resultado);

    resultado.forEach(element => {
      table.innerHTML += `
         <tr>
            <th scope="row">${element.id_contacto}</th>
            <td>${element.nombre_contacto}</td>
            <td>${element.telefono}</td>
            <td>${element.correo}</td>
           </tr>
      `;
    });
  });