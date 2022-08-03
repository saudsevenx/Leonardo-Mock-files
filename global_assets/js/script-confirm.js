const process = () => {

    const data = {
        "Policy Number" : ['CAS000153/1800', 'CAS000153/1800', 'CAS000153/1800', 'CAS000153/1900', 'CAS000153/1900', 'CAS000153/1900'],
        "Claim Number" : ['ADIH18070004','ADIH18080008','ADIH18100016', 'ADIH19080007','ADIH19120026', 'ADIH20020006'],
        "State": ['Closed','Open','Closed','Closed','Closed','Open'],
        "Loss Date" : ['06/10/2018','07/27/2018','08/23/2018','08/01/2019','12/26/2019', '11/19/2019'],
        "Loss State" : ['TX','TX','TX','TX','TX','TX'],
        "Loss Type" : ['Slip and Fall', 'Property Damage - NOC', 'Slip and Fall', 'All Other Property - NOC','Fall (Non-Slip Trip)', 'Collapse'],
        "Total Reserves" : ['$ 0.00', '$ 12,490.00','$ 0.00','$ 0.00','$ 0.00','$ 21,655.00'],
        "Total Paid" : ['$ 21,655.00','$ 990.00','$ 3,201.52','$ 6,017.90', '$ 1,642.59', ' $ 456.50'],
        "Total Outstanding" : ['$ 0.00','$ 11,500.00','$ 0.00','$ 0.00','$ 0.00','$ 21,198.50'],
        "Total Incurred" : ['$ 32,975.00', '$ 12,490.00','$ 3,201.52','$ 6,017.90', '$ 1,642.59','$ 21,655.00']
    }

    const data2 = {
        "Policy Number" : ['CAS000153/1800','CAS000153/1900'],
        "Policy Inception Date" : ['05/15/2018', '05/15/2019'],
        "Policy Expiration Date" : ['05/15/2019', '05/15/2020'],
        "Claim Number" : [3, 3] 
    }

    drawTable(data2);
    drawTable(data);    

    document.getElementById('editTableButton').addEventListener('click', editTable)
}

const editRow = e => {
    document.querySelector('.popup').style.display = 'flex';
}

const hidePopup = _ => {
    document.querySelector('.popup').style.display = 'none';
}

const editHeader = e => {
    const toolRows = document.querySelectorAll('.table .tool-row')
    toolRows.forEach(tool => tool.classList.toggle('show-row'))
    // document.getElementById('editHeaderButton').classList.toggle('selected-button')
}

const editTable = e => {
    const tools = document.querySelectorAll('.table .row .col:last-child')
    tools.forEach(tool => tool.classList.toggle('show-col'))
    // const toolRows = document.querySelectorAll('.table .tool-row')
    // toolRows.forEach(tool => tool.classList.toggle('show-row'))
    document.getElementById('editTableButton').classList.toggle('selected-button')
}

const drawTable = data => {
    let lrResult = document.querySelector('.lr-result');
    // lrResult.querySelector('.table') ? lrResult.querySelector('.table').remove() : null;
    const table = document.createElement('DIV')
    lrResult.appendChild(table);
    table.classList.add('table');

    let row = document.createElement('DIV')
    row.classList.add('row');
    table.appendChild(row);

    Object.keys(data).forEach(key => {
        const col = document.createElement('INPUT')
        col.classList.add('col')
        col.classList.add('col-heading')
        col.value = key
        col.title = key
        row.appendChild(col)
    })

    const tool = document.createElement('DIV');
    tool.classList.add('col', 'col-heading')
    tool.innerHTML = `<button id="editHeaderButton" onclick="editHeader()">
                        <i class="fa fa-pen"></i>
                    </button>`

    row.appendChild(tool)

    // row = document.createElement('DIV')
    // row.classList.add('row');
    // row.classList.add('tool-row');
    // for(let i = 0; i < Object.keys(data).length; i++){
    //     const col = document.createElement('DIV')
    //     col.classList.add('col')
    //     const edit = document.createElement('BUTTON')
    //     edit.classList.add('fa','fa-pen');
    //     const merge = document.createElement('BUTTON')
    //     merge.classList.add('fa','fa-arrow-left-long')
    //     col.appendChild(edit)
    //     col.appendChild(merge)
    //     row.appendChild(col)
    // }
    // const col = document.createElement('DIV')
    // col.classList.add('col')
    // row.appendChild(col)
    // table.appendChild(row);

    for(let i = 0; i < Object.values(data)[0].length; i++){
        row = document.createElement('DIV')
        row.classList.add('row');
        table.appendChild(row);
        for(let j = 0; j < Object.keys(data).length; j++){
            const col = document.createElement('INPUT')
            col.classList.add('col')
            col.value = Object.values(data)[j][i] || ''
            col.title = Object.values(data)[j][i] || ''
            row.appendChild(col)
        }
        const tools = document.createElement('DIV')
        // const edit = document.createElement('BUTTON')
        // edit.addEventListener('click', editRow)
        // edit.classList.add('fa','fa-pen');
        const merge = document.createElement('BUTTON')
        merge.classList.add('fa','fa-arrow-up-long')
        // tools.appendChild(edit)
        tools.appendChild(merge)
        tools.classList.add('col')
        row.appendChild(tools)
    }
}



document.addEventListener('DOMContentLoaded', process)