let button = document.getElementById("kysymys1");

button.addEventListener("click", firstQuestion)

function firstQuestion(){
    document.getElementById(tulos).innerHTML = "";
    let valinta = "";
    valinta = document.getElementById(vastaus);
    if(valinta.checked == true){
        document.getElementById(tulos).innerHTML = "Vastauksesi on oikein";
    }else {
        document.getElementById(tulos).innerHTML = "Nyt meni väärin";
    }      

}

firstQuestion("vastaus3", "kysymys_tulos");