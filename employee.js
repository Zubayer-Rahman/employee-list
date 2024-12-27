class employee{
    constructor(id, name, code){
        this.id = id;
        this.name = name;
        this.code = code;
    }
}

const employeeMap = new Map();

function clearFields(event) {
    event.preventDefault();

    document.getElementById('emp_id').value = '';
    document.getElementById('emp_name').value = '';
    document.getElementById('emp_code').value = '';
}

function validateEmployee(id, name, code) {
    if (id === "" || name === "" || code === "") {
        alert("Please fill all the fields.");
        return false;
    }

    if (!isNaN(name)) {
        alert("Not your Name");
        return false;
    }

    if (isNaN(id)) {
        alert("Not an ID!");
        return false;
    }

    if (!isCodeValid(code)) {
        alert("Invalid Employee Code!!");
        return false;
    }
    return true;
}

function isCodeValid(code) {
    if (!containsUppercase(code)) {
        return false;
    }
    if (!containsLowercase(code)) {
        return false;
    }
    if (!containsNumber(code)) {
        return false;
    }
    if (!containsSymbols(code)){
        return false;
    }
    return true;
}

function containsUppercase(code) {
    for (const char of code) {
        const charCode = char.codePointAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return true;
        }
    }
    return false;
}

function containsLowercase(code) {
    for (const char of code) {
        const charCode = char.codePointAt(0);
        if (charCode >= 97 && charCode <= 122) {
            return true;
        }
    }
    return false;
}

function containsNumber(code) {
    for (const char of code) {
        const charCode = char.codePointAt(0);
        if (charCode >= 48 && charCode <= 57) {
            return true;
        }
    }
    return false;
}

function containsSymbols(code){
    for(const char of code){
        const symbolCode = char.codePointAt(0)
        if((symbolCode >= 32 && symbolCode <= 47) || (symbolCode >= 58 && symbolCode <= 64)){
            return false;
        }
    }
    return true;
}

function addEmployee(event) {
    event.preventDefault();

    const idField = document.getElementById('emp_id');
    const nameField = document.getElementById('emp_name');
    const codeField = document.getElementById('emp_code');

    const id = idField.value;
    const name = nameField.value;
    const code = codeField.value;

    if(!validateEmployee(id, name, code)){
        return
    }

    const message = `ID: ${id}\nName: ${name}\nCode: ${code}\n\nAre you sure you want to confirm?`;
    const isConfirmed = confirm(message);

    if (isConfirmed) {
        const newEmployee = new employee(id, name, code);
        employeeMap.set(newEmployee);
        console.log(employeeMap);
        alert("New Employee Added!!");
    }

    idField.value = '';
    nameField.value = '';
    codeField.value = '';
}