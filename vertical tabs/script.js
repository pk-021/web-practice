
let contents = document.getElementsByClassName("content");
let len = contents.length

let links = document.getElementsByClassName("tabLink");

hideContents();
contents[0].style.display = "block";

function hideContents() {
    for (i = 0; i < len; i++) {
        contents[i].style.display = "none";
    }
}

function toggleTab(evnt, placeName) {
    hideContents();
    document.getElementById(placeName).style.display = "block";


    for (i = 0; i < len; i++) {
        links[i].className = links[i].className.replace(" active", " ");
    }

    evnt.currentTarget.className += " active";
}

