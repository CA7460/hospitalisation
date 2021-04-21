function fetchData() {
    let data;
    $("button").attr("disabled", true);
    $("#booting").attr("src","images/booting.gif");
    $.ajax({
        method: "GET",
        async: false,
        url: "https://hospitalisation.azurewebsites.net/api/gethosps?code=Hkx0oxDm6cvRfuegLsecA8z2PhRu44y1Hkv6YxxQUqhQC8PsInKzLw%3D%3D",
        // url: "./donnees/hospitalisations.json",
        success: (response) => {
            data = JSON.parse(response);
            // data = response;
            $("button").attr("disabled", false);
            $("#booting").attr("src","");
            console.log("gotcha");
        },
        error: () => {
            $("nav").html("DÉSOLÉ.. SERVEUR N'EST PAS ACCESSIBLE POUR LE MOMENT..");
            console.log("woooo");
        } 
    });
    return data;
};

