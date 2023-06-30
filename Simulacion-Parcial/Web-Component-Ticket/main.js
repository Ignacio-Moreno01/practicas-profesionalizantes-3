class HTMLTickets extends HTMLElement
{
	constructor()
	{
		super();
	}

	connectedCallback()
	{
		this.innerHTML = `
			<div>
	            <span>Tipo</span>
	       		<select id="typeSelect" style="width: 162px; margin-left: 50px">
	          		<option>Falla</option>
	           		<option>Funciona</option>
	          	</select>
	        </div>
	        <br>
	        <div>
	          	<span>Prioridad</span>
	            <select id="prioritySelect" style="width: 162px; margin-left: 20px">
	            	<option>Baja</option>
	            	<option>Media</option>
	            	<option>Urgente</option>
	          	</select>
	        </div>
	        <br>
	        <div>
	          	<span>Descripcion</span>
	          	<input id="descriptionText" rows="8" cols="30" style="margin-left: 3px"></input>
	          	<br>
	          	<br>
	          	<button style="background-color: #ccc; margin-left: 185px" onclick="main()">Agregar</button>
	        </div>
	        <br>
	        <div id="ticketTable">
	          	<table style="background-color: #ccc; width: 245px">
	            	<tr>
	              		<th>Tipo</th>
	              		<th>Descripcion</th>
	              		<th>Prioridad</th>
	            	</tr>
	          	</table>
	        </div>
		`;
	}

	disconnectedCallback()
	{

	}
}

function statusColor(priority)
{
	switch(priority.toLowerCase())
	{
		case "baja":
    		return "green";
    	case "media":
        	return "yellow";
    	case "urgente":
        	return "red";
    	default:
        	return "";
	}
}

function main()
{
    let typeSelect = document.getElementById("typeSelect");
    let prioritySelect = document.getElementById("prioritySelect");
    let descriptionText = document.getElementById("descriptionText");
    let ticketTable = document.getElementById("ticketTable").querySelector("table");
    let type = typeSelect.value;
    let priority = prioritySelect.value;
    let description = descriptionText.value;

    if (description.trim() !== "") {
    	let row = ticketTable.insertRow();
    	row.innerHTML = `
        	<td>${type}</td>
        	<td>${description}</td>
        	<td><span style="background-color: ${statusColor(priority)};">${priority}</span></td>
      	`;

    let action = confirm("¿Desea agregar este ticket?");
    if (action) {
      	document.body.appendChild(ticket);
    }
  	} else {
    	alert("Ingrese una descripcion para el ticket.");
  	}
}

window.customElements.define('x-tickets', HTMLTickets);