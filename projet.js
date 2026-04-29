document.addEventListener("DOMContentLoaded",() =>{
    const descriptions = {
        "Lycée.jpeg" : "Pendant mes années au lycée, j’ai suivi un cursus général. En première, j’ai choisi les spécialités mathématiques, physique-chimie et sciences économiques et sociales. J’ai décidé en terminale d’arrêter la spécialité physique-chimie.",
        "Ensibs.jpeg" : "A la fin de mon BUT QLIO, j'ai voulu continuer dans le même domaine et ainsi m'orienter en Génie Industriel à l'ENSIBS de Lorient. Lors de cette première année en école d'ingénieure j'ai pu apprendre la modélisation d'une ligne, l'analyse des risques d'une entreprise ainsi que la gestion des stocks.",
        "Iut de Lorient.jpeg" : "En deuxième année d’études, j’ai souhaité arrêter ma formation dans les matériaux pour me diriger vers un secteur plus industriel. C’est pour cela que je suis allé(e) en BUT QLIO (Qualité, Logistique Industrielle et Organisation). J’ai pu apprendre le management, la gestion des flux et l’amélioration continue.",
        "Iut de Nantes.jpeg" : "Lors de ma première année d’études, j’étais en BUT SGM (Sciences et Génie des Matériaux). J’ai appris à caractériser les matériaux, à les concevoir et à tester leur résistance mécanique.",
    };

    document.addEventListener("click", (e) =>{
        if(e.target.tagName === "IMG"){
            const nom = e.target.getAttribute("src");
            const zone = e.target.parentElement.querySelector(".description-test");
            zone.textContent = descriptions[nom] || "Aucune description disponible";
        }
    });
});