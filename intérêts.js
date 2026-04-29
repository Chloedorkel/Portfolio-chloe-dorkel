function intérêts(sports){
    var image;
    if (sports=="tennis"){
        image="tennis.jpeg"
    }
    else if (sports=="badminton"){
        image="badminton.jpeg"
    }
    else if (sports=="activités"){
        image="activités extérieurs.jpeg"
    }
    else if (sports=="voyages"){
        image="voyages.jpeg"
    }
    document.getElementById('monImage').src=image;
}
 