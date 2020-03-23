function $(selector){
    return document.querySelector(selector);
}
function createElelment(element){
    return document.createElement(element)
}
const createBtn = $('#btnCreate');
const txtFirstName = $('#txtFirstName');
const txtLastName = $('#txtLastName');
const txtDoB = $('#txtDoB');

let err = $('#errors');
let tb = $('#people');

createBtn.addEventListener('click', addPerson);

function addPerson(){
    let p = new Person(
        txtFirstName.value,
        txtLastName.value,
        new Date(`${txtDoB.value}T00:00:00`)
    );
    let tr = createElelment('tr');
    let tdFirstName = createElelment('td');
    let tdLastName = createElelment('td');  
    let tdage = createElelment('td');

    tdFirstName.innerHTML = p.firstName;
    tdLastName.innerHTML = p.lastName;
    tdage.innerHTML = p.age();

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdage);
    tb.appendChild(tr);

    clearForm();
}

function clearForm(){
    txtFirstName.value = '';
    txtLastName.value = '';
    txtDoB.value = '';
    err.innerHTML = '';
    txtFirstName.focus();
}