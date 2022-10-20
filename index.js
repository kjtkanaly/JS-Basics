const white = '#fdffff';
const blue = '#010081';
const teal = '#008080';
const black = '#000000';
const darkGray = '#818181';
const lightGray = '#c3c3c3';
const pink = '#ff0081';

var MainImage;
var newImg = new Image;

function OnLoadEvent() {
    document.getElementById("Default-Image").style.backgroundColor = white;
    document.getElementById("Default-Nav").style.backgroundColor = white;

    // Grabbing the Main image element
    MainImage = document.getElementById('Image1');

    // Preloading all image options
    newImg.src = ("Images/" + "actontown" + ".jpg");
}

function SelectImage(element) {
    let Options = document.getElementsByClassName("img-li");
    
    for (let i = 0; i < Options.length; i++)
    {
        // Debug
        //console.log(Options[i].textContent + " " + Options[i].style.backgroundColor);

        if (Options[i].style.backgroundColor == "rgb(253, 255, 255)")
        { 
            Options[i].style.backgroundColor = lightGray;
            break;
        }
    }

    element.style.backgroundColor = white;

    MainImage.src = newImg.src;    
    MainImage.width = "516";
    
}

function SelectNav(element) {
    let Options = document.getElementsByClassName("nav-li");
    
    for (let i = 0; i < Options.length; i++)
    {
        // Debug
        //console.log(Options[i].textContent + " " + Options[i].style.backgroundColor);

        if (Options[i].style.backgroundColor == "rgb(253, 255, 255)")
        { 
            Options[i].style.backgroundColor = lightGray;
            break;
        }
    }

    element.style.backgroundColor = white;
}

function HighlightImage(element) {
    if (element.style.backgroundColor != "rgb(253, 255, 255)")
    {
        element.style.backgroundColor = darkGray;
    }
}

function DeHighlightImage(element) {
    if (element.style.backgroundColor != "rgb(253, 255, 255)")
    {
        element.style.backgroundColor = lightGray;
    }
}