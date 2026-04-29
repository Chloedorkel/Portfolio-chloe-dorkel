function AffichageTexte() {
    document.getElementById("myadresse").innerHTML = 
    "Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient";
    document.getElementById("myadresse").style.fontSize="20px";
    document.getElementById("myadresse").style.color="black" ;
    document.getElementById("myadresse").style.backgroundColor="Blue" ;
}
function DateHeure(){
    document.getElementById("buttonDate").addEventListener("click",function(){
        document.getElementById("Date").textContent = 
            new Date().toLocaleDateString("fr-FR",{
                weekday : "long",
                year : "numeric",
                month : "long",
                day: "numeric",
                hour :"2-digit",
                minute : "2-digit",
                second : "2-digit"
            });
    });
}
