class Model {

    #dossierEtab = 'no dossier patient';
    #dossierPat = 'dossier';
    #codeEtab = 'code etablissement'

    constructor(data) {
        this.patients = data.patients;
        this.etablissements = data.etablissements;
    }

    defaultSort() {
        this.patients = this.patients.sort((a, b) => a[this.#dossierPat] > b[this.#dossierPat] ? 1 : -1);
    }

    getSorted(tabName, col, order) {
        let table = this[tabName];
        let sort = order.data('order');
        if (sort == 'desc') {
            order.data('order', 'asc');
            sort = 'asc';
            this[tabName] = this[tabName].sort((a, b) => a[col] > b[col] ? 1 : -1);
        } else {
            order.data('order', 'desc');
            sort = 'desc';
            this[tabName] = this[tabName].sort((a, b) => a[col] < b[col] ? 1 : -1);
        }
        return sort;
    }

    getPatientHospitalisations(dossier) {
        this.patientsByDossier = [];
        for (let item of this.etablissements) {
            if (item[this.#dossierEtab] == dossier) {
                this.patientsByDossier.push(item);
            }
        }
        this.patientsByDossier = this.patientsByDossier.sort((a,b) => a[this.#codeEtab] > b[this.#codeEtab] ? 1 : -1);
        return this.patientsByDossier;
    }

    getPatientDataToString(dossier) {
        let stringData = '';
        for (let item of this.patients) {
            if (item['dossier'] == dossier) {
                for (let prop in item) {
                    stringData += `${prop} : ${item[prop]} -- `
                }
                break;
            }
        }
        return stringData;
    }

}

