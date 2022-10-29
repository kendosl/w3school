function hideCapitals() {
    var x = document.getElementsByClassName('capital');
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
}

function showCapitals() {
    var x = document.getElementsByClassName('capital');
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "block"
    }
}