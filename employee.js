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

function addEmployee(event) {
    event.preventDefault();

    const idField = document.getElementById('emp_id');
    const nameField = document.getElementById('emp_name');
    const codeField = document.getElementById('emp_code');

    const id = idField.value;
    const name = nameField.value;
    const code = codeField.value;

    if (id === "" || name === "" || code === "") {
        alert("Please fill all the fields.");
        return;
    }

    if(!isNaN(name)){
        alert("Not your Name");
        return;
    }

    if(isNaN(id)){
        alert("Not an ID!");
        return
    }
    
    if(!validateCode(code)){
        alert("Inavlid Employee Code!!");
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

function validateCode(code) {
    const codeRegex = /^[A-Za-z0-9]+$/;
    return codeRegex.test(code);
}
