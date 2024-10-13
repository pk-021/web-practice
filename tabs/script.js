let tabs = document.getElementsByClassName("section");
tabs[0].style.display = "block";

function show(event, place)
{
    let i =0, tablinks;


    let len = tabs.length;
    for(i=0;i<len;i++)
    {
        tabs[i].style.display = "none";
        console.log(i);
    }


  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


    console.log(place);
    document.getElementById(place).style.display = "block";
    event.currentTarget.className += " active";
}