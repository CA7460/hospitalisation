let fs = require('fs');

const firstNames = ['Jodie', 'Retta', 'Nicki', 'Bernie', 'Kristopher', 'Felicia', 'Calista', 'Nathaniel', 'Suzi', 'Earlean', 'Hollis', 'Shanelle', 'Aisha', 'Josiah', 'Susy', 'Ewa', 'Ma', 'America', 'Reinaldo', 'Kylee'];
const lastNames = ['Paul', 'Royce', 'Tracey', 'Matt', 'Wally', 'Ronny', 'Hector', 'Reggie', 'Roderick', 'Loren', 'Elmer', 'Guy', 'Buck', 'Buford', 'Ryan', 'Bennie', 'Roberto', 'Britt', 'Nathan', 'Darrin'];
const sex = ['F', 'M'];
// const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// const monthsFr = ["janv.", "fev.", "mars", "avr.", "may", "jun.", "jul.", "aout", "sep.", "oct.", "nov.", "dec."];
const specialization = ["medecine", "chirurgie", "orthopedie"];
const hospitalCodes = [1234, 2345, 3456, 4567, 5678];



function getHosphDates() {
    let dates = [];
    let year = Math.floor(Math.random() * (2022 - 2020)) + 2020;
    let month = Math.floor(Math.random() * 12);
    let day = Math.floor(Math.random() * 28);
    dates.push(new Date(year, month, day + 1));
    dates.push(new Date(year, month, day + Math.floor(Math.random() * 60)));
    return dates;
}


function getBirthDate() {
    let year = Math.floor(Math.random() * (1995 - 1920)) + 1920;
    let month = Math.floor(Math.random() * 12);
    let day = Math.floor(Math.random() * 28);
    return new Date(year, month, day + 1);
}


function getPatients() {
    let patients = [];
    while (patients.length < 30) {
        let date = getBirthDate();

        let pat = {
            "dossier": patients.length + 1,
            "nom": firstNames[Math.floor(Math.random() * 20)],
            "prenom": lastNames[Math.floor(Math.random() * 20)],
            "naissance": date,
            // "naissence": `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
            "sexe": sex[Math.floor(Math.random() * 2)]
        }
        patients.push(pat);
    }
    return patients;
}

function getEteblissements() {
    let etablissements = [];
    while (etablissements.length < 55) {
        let admDates = getHosphDates();
        let start = admDates[0];
        let end = admDates[1];
        let hospitalisation = {
            "code etablissement": hospitalCodes[Math.floor(Math.random() * 5)],
            "no dossier patient": Math.floor(Math.random() * 30) + 1,
            "date admission": start,
            "date sortie": end,
            // "date sortie": `${end.getDate()}-${monthsFr[end.getMonth()]}-${end.getFullYear()}`,
            "specialite": specialization[Math.floor(Math.random() * 3)]
        }
        etablissements.push(hospitalisation);
    }
    return etablissements;
}

let hosps = {
    "patients": getPatients(),
    "etablissements": getEteblissements()
}

fs.writeFileSync('./hospitalisations.json', JSON.stringify(hosps));




function getAll() {
    $.ajax({
        method: "GET",
        url: "https://hospitalisation.azurewebsites.net/api/gethosps?code=Hkx0oxDm6cvRfuegLsecA8z2PhRu44y1Hkv6YxxQUqhQC8PsInKzLw%3D%3D",
        success: (response) => {
            hosps = JSON.parse(response);
        }
    });
};
