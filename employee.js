function addFunction(event) {

    const idField = document.getElementById('id_field');
    const nameField = document.getElementById('name_field');
    const id = idField.value;
    const name = nameField.value;

    const message = `ID: ${id}\n
                    Name: ${name}\n\n
                    Are you sure you want to confirm?`;

    const isConfirmed = confirm(message);

    if (!isConfirmed) {
        idField.value = '';
        nameField.value = '';
    }
}
