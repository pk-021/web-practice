var acc = document.getElementsByClassName("accordion");
var i;


console.log(acc.length);
for (i = 0; i < acc.length; i++) {
    console.log("here");
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("visible");
    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}