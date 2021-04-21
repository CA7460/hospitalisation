let model;
let tableBuilder;
let selectBuilder;
const tableDiv = "#table";
const dossiersDiv = "#dossiers";
const patientData = "#patientData";


let dependencies = [
    'js/requets.js',
    'js/models/Model.js',
    'js/views/TableBuilder.js',
    'js/views/SelectBuilder.js',
    'js/controllers/controller.js'
]

function addDependencies() {
    dependencies.forEach(element => {
        $("head").append(`<script src=${element}></script>`);
    });
}

function setContext() {
    // addDependencies();
    model = new Model(fetchData());
    tableBuilder = new TableBuilder();
    selectBuilder = new SelectBuilder();
}

