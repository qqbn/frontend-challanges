const rows = document.querySelector('#rows');
const columns = document.querySelector('#columns');
const rowsValue = document.querySelector('#rows-value');
const columnsValue = document.querySelector('#columns-value');
const box = document.querySelector('.table-box');


rows.addEventListener('input', (event) =>{
    rowsValue.textContent = event.target.value;
    box.removeChild(box.firstChild);
    createTable();
})

columns.addEventListener('input', (event) =>{
    columnsValue.textContent = event.target.value;
    box.removeChild(box.firstChild);
    createTable();
})

function createTable(){
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    for(let i = 0; i < rows.value; i++) {
        const tr = document.createElement('tr');
        
        for (let y = 0; y < columns.value; y++) {
            const td = document.createElement('td');
            const text = document.createTextNode(''+(y+1)+'');

            td.appendChild(text);
            tr.appendChild(td);
        }

        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    box.appendChild(table);
}

createTable();