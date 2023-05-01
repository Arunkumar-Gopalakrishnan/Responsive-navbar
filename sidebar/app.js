// sidebar program

const sidebar = document.querySelector(".sidebar-toggle");
console.log(sidebar);
const navtoggleButton = document.querySelector(".sidebar");
console.log(navtoggleButton);
const navtoggleClose = document.querySelector(".close-btn");
console.log(navtoggleClose);
sidebar.addEventListener("click",function() {
    navtoggleButton.classList.toggle("show-sidebar");
});
navtoggleClose.addEventListener("click",function()
{
    navtoggleButton.classList.remove("show-sidebar");
})
