function showTable(tabName, order, col) {
    setChosen(tabName);
    $(patientData).text("");
    tableBuilder.build(model[tabName], order, col);
    $('th').on('click', {tabName}, sortBy);
}

function sortBy(tabName) {
    tabName = tabName.data.tabName;
    let col = $(this).data('column');
    let order = $(this);
    order = model.getSorted(tabName, col, order);
    showTable(tabName, order, col);
}

// faire le bouton pousse surliné en UI 
function setChosen(id) {
    let chosen = $(".chosen");
    for (let item of chosen) {
        item.classList.remove('chosen');
    }
    $(`#${id}`).addClass('chosen');
}

function showDossiers(tabName)  {
    setChosen(tabName);
    model.defaultSort();
    selectBuilder.build();
    $(dossiersDiv).on("change", function () {
        let patientHospitalisations = model.getPatientHospitalisations($(this).val());
        if (patientHospitalisations.length != 0) {
            $(patientData).text(model.getPatientDataToString($(this).val()));
            tableBuilder.append(patientHospitalisations);
        } else {
            $(patientData).text("Ce patient n'a pas d'histoire de hospitalisations");
        }
    });
}