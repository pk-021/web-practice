const contents = document.getElementsByClassName("content");
let lenContent = contents.length, i;

const tabs = document.getElementsByClassName("tabLink");
let lenTabs = tabs.length;



function hideContent() {
    for (i = 0; i < lenContent; i++) {
        contents[i].style.display = "none";
    }
}

function clearTabStyles()
{
    for(i=0;i<lenTabs;i++)
        {
            tabs[i].style.backgroundColor = "";
            tabs[i].style.color = "";
        }
    }
    
    
    function changeTab(evnt, location) {
        hideContent();
        document.getElementById(location).style.display = "block";

        clearTabStyles();
        styl = window.getComputedStyle(document.getElementById(location));
        evnt.currentTarget.style.backgroundColor = styl.getPropertyValue('background-color').toString();
        evnt.currentTarget.style.color = "white";
    }
    
    
    document.getElementById("defaultTab").click();