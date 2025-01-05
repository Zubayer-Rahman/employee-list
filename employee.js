class Employee{
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

function validateEmployee(emp) {
    if (emp.id === "" || emp.name === "" || emp.code === "") {
        alert("Please fill all the fields.");
        return false;
    }

    if(!containsUppercase(emp.name)){
        alert("Name must contain at least one uppercase letter");
        return false;
    }

    if (!isNaN(emp.name)) {
        alert("Not your Name");
        return false;
    }

    if (isNaN(emp.id)) {
        alert("Not an ID!");
        return false;
    }

    if (!isCodeValid(emp.code)) {
        return false;
    }
    return true;
}

function isCodeValid(empCode) {
    if (!containsUppercase(empCode)) {
        alert("Invalid Employee Code!!\nMust contain an uppercase leter!!");
        return false;
    }
    if (!containsLowercase(empCode)) {
        alert("Invalid Employee Code!!\nMust contain an lowerrcase leter!!");
        return false;
    }
    if (!containsNumber(empCode)) {
        alert("Invalid Employee Code!!\nMust contain an number!!");
        return false;
    }
    if (!containsSymbols(empCode)){
        alert("Invalid Employee Code!!\nCannot contain a Symbol!!");
        return false;
    }
    return true;
}

function containsUppercase(str) {
    for (const char of str) {
        const charCode = char.codePointAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return true;
        }
    }
    return false;
}

function containsLowercase(str) {
    for (const char of str) {
        const charCode = char.codePointAt(0);
        if (charCode >= 97 && charCode <= 122) {
            return true;
        }
    }
    return false;
}

function containsNumber(int) {
    for (const char of int) {
        const charCode = char.codePointAt(0);
        if (charCode >= 48 && charCode <= 57) {
            return true;
        }
    }
    return false;
}

function containsSymbols(str){
    for(const char of str){
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

    const newEmployee = new Employee(id, name, code);

    if(!validateEmployee(newEmployee)){ //validates employee fields
        return
    }

    const message = `ID: ${id}\nName: ${name}\nCode: ${code}\n\nAre you sure you want to confirm?`;
    const isConfirmed = confirm(message);

    if (isConfirmed) {
        employeeMap.set(newEmployee); //adds emp info to the map
        console.log(employeeMap);
        alert("New Employee Added!!");
    }

    displayEmployee(newEmployee); //displayes newEmployee that has been added to the map
    
    idField.value = '';
    nameField.value = '';
    codeField.value = '';
}

function displayEmployee(emp){
    const container = document.getElementById("employee-list");

    const employeeInfoDiv = document.createElement('div');
    employeeInfoDiv.className = 'employee-info'

    const employeeId = document.createElement('p');
    employeeId.textContent=`Id: ${emp.id}`
    employeeInfoDiv.appendChild(employeeId);

    const employeeName = document.createElement('p');
    employeeName.textContent=`Name: ${emp.name}`
    employeeInfoDiv.appendChild(employeeName);

    const employeeCode = document.createElement('p');
    employeeCode.textContent=`Code: ${emp.code}`
    employeeInfoDiv.appendChild(employeeCode);

    container.appendChild(employeeInfoDiv)
}