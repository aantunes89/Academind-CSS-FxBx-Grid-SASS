let backdrop = document.querySelector('.backdrop');
let button = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');

/*
for(var i = 0; i <= button.length; i++) {
    button[i].addEventListener('click', function() {

    });
}
*/

button.forEach(function(i) {
    i.addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
})

let modalBtnNegative = document.querySelector('.modal__action--negative');
modalBtnNegative.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
});