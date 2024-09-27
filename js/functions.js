document.getElementById('generate-numbers').addEventListener('click', generateNumbers);

function generateNumbers() {
    const numbersTable = document.getElementById('numbers');
    const newRow = numbersTable.insertRow();

    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
    }

    generateAdditionalNumbers();
}

function generateAdditionalNumbers() {
    const additionalNumbersTable = document.getElementById('additional-numbers');
    const newRow = additionalNumbersTable.insertRow();

    for (let i = 0; i < 2; i++) {
        const newCell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
    }
}