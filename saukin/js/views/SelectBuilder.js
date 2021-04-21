class SelectBuilder {

    constructor() {
        this.tabName = "patientsByDossier";
    }

    build() {
        $(tableDiv).html("").append("<select id='dossiers' ></select>");
        $(dossiersDiv).append(new Option("Choisissez un dossier du patient"));
        
        for (let patient of model.patients) {
            $(dossiersDiv).append(new Option(patient['dossier']));
        }

    }

}