let companies = [
    "Trello"
]
let specialities =  {
    full: ["React/Mongodb"],
    front: ["React/Tailwind"],
    back: ["NodeJS/Express"],
}

function init(){
    document.querySelector("#person-picture").src = "./src/img/ali.jpg"; 
    document.querySelector("#person-fullname").innerHTML = "Ali Abdalla"
    document.querySelector("#person-firstname").innerHTML = "Ali";
    document.querySelector("#person-job").innerHTML = "Développeur web";
    document.querySelector("#person-position").innerHTML = "Développeur front-end";
    document.querySelector("#person-company").innerHTML = React+" chez en recherche d'emploi";
    document.querySelector("#person-city").innerHTML = Puteaux+ ", " + 92800;
    document.querySelector("#person-email").href = "mailto:"+"ali.abdalla@outlook.fr";
}

init();