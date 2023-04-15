// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let navtoggle =document.querySelector(".nav-toggle");
let togglelinks =document.querySelector(".links");

navtoggle.addEventListener("click",myFunction);

function myFunction()
{
    console.log(togglelinks.classList);
    console.log(togglelinks.classList.contains("links"));
    if(togglelinks.classList.contains("show-links"))
    {
        togglelinks.classList.remove("show-links")
    }
    else
    {
        togglelinks.classList.add("show-links")
    }
    //  togglelinks.classList.toggle("show-links");
}
