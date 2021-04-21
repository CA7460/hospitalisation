class TableBuilder {
    
    arrows = {
        'asc' : "&#9650",
        'desc' : "&#9660"
    }

    #ascending = "asc";

    append(itemArray, order) {
        let newTable = this.buidTableHeader(itemArray, order) + this.buildTableBody(itemArray);
        console.log($('table'));
        if ($('table').length == 0) {
            $(tableDiv).append(newTable);
        } else {
            $(tableDiv + ' > table').html(newTable);
        }
    }

    build(itemArray, order, col) {
        $(tableDiv).html(this.buidTableHeader(itemArray, order, col) + this.buildTableBody(itemArray));
    }


    buidTableHeader(itemArray, order, col) {

        let tempTable = '<table><tr>';
        let dataOrder = (order != null ? order : this.#ascending);
        
        let dataCol = (col != null ? col : Object.keys(itemArray[0])[0]);
        let arrow = (order != null ? this.arrows[order] : this.arrows['asc']);

        for (let prop in itemArray[0]) {
            tempTable += `<th data-column="${prop}" data-order="${dataOrder}">${prop} ${dataCol == prop ? arrow : ''}</th>`;
        }
        tempTable += '</tr>';

        return tempTable;
    }

    buildTableBody(itemArray) {
        let tempTable = '';
        let regDate = /\d{4}-\d{2}-\d{2}/;
        for (let item of itemArray) {
            tempTable += '<tr>';
            for (let prop in item) {
                if (regDate.test(item[prop])) {
                    tempTable += `<td>${this.getDateString(itemArray, item[prop])}</td>`
                } else {
                    tempTable += `<td>${item[prop]}</td>`;
                }
            }
            tempTable += '</tr>';
        }
        tempTable += '</table>';

        return tempTable;
    }


    getDateString(tabName, originalDate) {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const monthsFr = ["janv.", "fev.", "mars", "avr.", "may", "jun.", "jul.", "aout", "sep.", "oct.", "nov.", "dec."];
        let stringDate;
        let date = new Date(originalDate);
        if (tabName == 'patients') {
            stringDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        } else {
            stringDate = `${date.getDate()}-${monthsFr[date.getMonth()]}-${date.getFullYear()}`;
        }
        return stringDate;
    }

}