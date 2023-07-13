class CRUDModel 
{
    constructor(view) 
    {
        this.dataArray = [];
        this.innerView = view;
    }

    create(userData) 
    {
        this.dataArray.push(userData);
        console.log(this.dataArray);
        this.innerView.render();
    }

    edit(index, newData) 
    {
        this.dataArray[index].name = newData.name;
        this.dataArray[index].surname = newData.surname;
        this.dataArray[index].phone = newData.phone;
        console.log(this.dataArray);
    }

    delete(index) 
    {
        this.dataArray.splice(index, 1);
        console.log(this.dataArray);
    }
}

class CRUDController 
{
    constructor( view, model ) 
    {
        this.innerView = view;
        this.innerModel = model;

        this.innerView.createBtn.onclick = () => this.oncreatebuttonclick();

        this.innerView.resultBody.addEventListener("click", (event) => {
            let target = event.target;
            if (target && target.classList.contains("deleteButton")) 
            {
                let row = target.closest("tr");
                let rowIndex = row.rowIndex - 1;
                this.innerModel.delete(rowIndex);
                this.innerView.render(this.innerModel.dataArray);
            }
            if (target && target.classList.contains("updateButton")) 
            {
                let row = target.closest("tr");
                let rowIndex = row.rowIndex - 1;
                let newData = this.innerView.getDataInputFromRow(row);
                this.innerModel.edit(rowIndex, newData);
                this.innerView.render(this.innerModel.dataArray);
            }
        });
    }

    oncreatebuttonclick() 
    {
        const userData = this.innerView.getDataInput();
        this.innerModel.create(userData);
        this.innerView.render();
        this.innerView.clearForm();
    }
}

class CRUDView extends HTMLElement 
{
    constructor() 
    {
        super();

        this.mainTitle = document.createElement('h1');
        this.mainTitle.innerText = 'Contactos Telefónicos';

        this.formInput = document.createElement('form');
        this.formInput.id = 'formInput';

        this.name = document.createElement('input');
        this.name.type = 'text';
        this.name.placeholder = 'Nombre';
        this.name.required = true; 

        this.surname = document.createElement('input');
        this.surname.type = 'text';
        this.surname.placeholder = 'Apellido';
        this.surname.required = true; 

        this.phone = document.createElement('input');
        this.phone.type = 'number';
        this.phone.placeholder = 'Teléfono';
        this.phone.required = true; 

        this.list = document.createElement('ul');
        this.list.id = 'list';

        this.categoryField = document.createElement('label');
        this.categoryField.classList.add('categoryField');
        this.categoryField.htmlFor = 'category';
        this.categoryField.innerText = 'Categoria:';

        this.selector = document.createElement('select');
        // this.selector.name = 'selector';

        this.optionFriends = document.createElement('option');
        this.optionFriends.id = 'friends';
        this.optionFriends.value = 'Amigos';
        this.optionFriends.innerText = 'Amigos';

        this.optionJobs = document.createElement('option');
        this.optionJobs.id = 'job';
        this.optionJobs.value = 'Trabajo';
        this.optionJobs.innerText = 'Trabajo';

        this.optionStudies = document.createElement('option');
        this.optionStudies.id = 'studies';
        this.optionStudies.value = 'Estudio';
        this.optionStudies.innerText = 'Estudio';

        this.optionFamily = document.createElement('option');
        this.optionFamily.id = 'family';
        this.optionFamily.value = 'Familia';
        this.optionFamily.innerText = 'Familia'; 

        this.optionFavorites = document.createElement('option');
        this.optionFavorites.id = 'favorites';
        this.optionFavorites.value = 'Favorito';
        this.optionFavorites.innerText = 'Favorito'; 

        this.optionServices = document.createElement('option');
        this.optionServices.id = 'services';
        this.optionServices.value = 'Servicio';
        this.optionServices.innerText = 'Servicio';

        this.actionSubtitle = document.createElement('h4');
        this.actionSubtitle.innerText = 'Accion:';

        this.createBtn = document.createElement('button');
        this.createBtn.innerText = 'Crear';
        this.createBtn.type = 'submit';

        this.updateBtn = document.createElement('button');
        this.updateBtn.innerText = 'Actualizar';

        this.deleteBtn = document.createElement('button');
        this.deleteBtn.innerText = 'Borrar';

        this.dataSubtitle = document.createElement('h4');
        this.dataSubtitle.innerText = 'Datos:';

        this.resultData = document.createElement('table');
        this.resultHeader = this.resultData.createTHead();
        this.resultBody = this.resultData.createTBody();

        let columnTags = ['ID', 'Nombre', 'Apellido', 'Teléfono', 'Categoría'];

        this.resultHeaderRow = this.resultHeader.insertRow();

        for (let tag of columnTags) 
        {
            let columnElement = document.createElement('th');
            columnElement.innerText = tag;
            this.resultHeaderRow.insertCell().appendChild(columnElement);
        }

        this.appendChild(this.mainTitle);
        this.appendChild(this.formInput);
        this.formInput.appendChild(this.name);
        this.formInput.appendChild(this.surname);
        this.formInput.appendChild(this.phone);
        this.appendChild(this.list);
        this.appendChild(this.categoryField);
        this.appendChild(document.createElement('br'));
        this.appendChild(document.createElement('br'));
        this.appendChild(this.selector);
        this.selector.appendChild(this.optionFriends);
        this.selector.appendChild(this.optionJobs);
        this.selector.appendChild(this.optionStudies);
        this.selector.appendChild(this.optionFamily);
        this.selector.appendChild(this.optionFavorites);
        this.selector.appendChild(this.optionServices);
        this.appendChild(document.createElement('br'));
        this.appendChild(this.actionSubtitle);
        this.appendChild(this.createBtn);
        this.appendChild(this.updateBtn);
        this.appendChild(this.deleteBtn);
        this.appendChild(document.createElement('br'));
        this.appendChild(this.dataSubtitle);
        this.appendChild(this.resultData);

        this.innerModel = new CRUDModel(this);
        this.innerController = new CRUDController(this, this.innerModel);
    }

    connectedCallback(){}

    disconnectedCallback(){}

    getDataInput() 
    {
        let userData = 
        {
            Nombre: this.name.value,
            Apellido: this.surname.value,
            Telefono: this.phone.value,
            Categoria: this.selector.value
        }

        return userData;
    }

    render(dataArray) 
    {
        while (this.resultBody.firstChild) 
        {
            this.resultBody.firstChild.remove();
        }

        let id = 1;
        for (let userData of this.innerModel.dataArray) 
        {
            let row = this.resultBody.insertRow();
            let idCell = row.insertCell();

            idCell.innerText = id++;

            for (let key in userData) 
            {
                let valueCell = row.insertCell();
                valueCell.innerText = userData[key];
            }
            row.classList.add(userData.categoryField);
        }
    }

    clearForm() 
    {
        this.name.value = '';
        this.surname.value = '';
        this.phone.value = '';
        this.selector.value = '';
    }
}

customElements.define('x-crud', CRUDView);

function main() 
{
    let appView = new CRUDView();
    let app = document.querySelector('x-crud');
    if (app) 
    {
        app.remove();
    }
  
    document.body.appendChild(appView);
}

window.onload = main;