// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


let modalBtn =document.querySelector(".modal-btn");
let closeBtn =document.querySelector(".close-btn");


modalBtn.addEventListener('click',myRemoveFunction);
closeBtn.addEventListener('click',myAddFunction);

function myRemoveFunction() 
{
    document.querySelector('.modal-overlay').classList.add('open-modal');
}
function myAddFunction()
{
    document.querySelector('.modal-overlay').classList.remove('open-modal');
}