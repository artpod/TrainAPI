const uri = 'api/Drivers';
let drivers = [];
function getCategories() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayCategories(data))
        .catch(error => console.error(' Unable to get categories.', error));
}
function addCategory() {
    const addNameTextbox = document.getElementById('add-name');
    const addInfoTextbox = document.getElementById('add-birthday');
    const driver = {
        name: addNameTextbox.value.trim(),
        birthday: addInfoTextbox.value.trim(),
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json '
        },
        body: JSON.stringify(driver)
    })
        .then(response => response.json())
        .then(() => {
            getDrivers();
            addNameTextbox.value = '';
            addInfoTextbox.value = '';
        })
        .catch(error => console.error(' Unable to add driver.', error));
}
function deleteCategory(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
.then(() => getDrivers())
.catch (error => console.error(' Unable to delete driver.', error));
}
function displayEditForm(id) {
    const driver = drivers.find(driver => driver.id == id);
    document.getElementById('edit-id').value = driver.id;
    document.getElementById('edit-name').value = driver.name;
    document.getElementById('edit-birthday').value = driver.birthday;
    document.getElementById('editForm').style.display = 'block';
}
function updateCategory() {
    const driverId = document.getElementById('edit-id').value;
    const driver = {
        id: parseInt(driverId, 10),
        name: document.getElementById('edit-name').value.trim(),
        birthday: document.getElementById('edit-birthday').value.trim()
    };
    fetch(`${uri}/${driverId}`, {
        method: 'PUT',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(driver)
    })
        .then(() => getCategories())
        .catch(error => console.error('Unable to update driver.', error));
    closeInput();
    return false;
}
function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}
function _displayCategories(data) {
    const tBody = document.getElementById('drivers');

    tBody.innerHTML = '';
    const button = document.createElement('button');
    data.forEach(driver => {
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${driver.id})`);
        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteCategory(${driver.id})`);
        let tr = tBody.insertRow();
        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(driver.name);
        td1.appendChild(textNode);
        let td2 = tr.insertCell(1);
        let textNodeInfo = document.createTextNode(driver.birthday);
        td2.appendChild(textNodeInfo);
        let td3 = tr.insertCell(2);
        td3.appendChild(editButton);
        let td4 = tr.insertCell(3);
        td4.appendChild(deleteButton);
    });
    drivers = data;
}