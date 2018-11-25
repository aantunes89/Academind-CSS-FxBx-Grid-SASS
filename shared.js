let backdrop = document.querySelector('.backdrop');
let button = document.querySelectorAll('.plan button');
// Modal Selectors//
let modal = document.querySelector('.modal');
let modalNoBtn = document.querySelector('.modal__action--negative');

// Toggle Button Selectors//
let mobileNav = document.querySelector('.mobile-nav');
let toggleBtn = document.querySelector('.toggle-button');




function displayModal() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open' this will overwrite the complete element
    modal.classList.add('open');
    backdrop.classList.add('open');
}

function closeModal() {
    // modal.style.display = "none";
    // backdrop.style.display = "none";
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

button.forEach(function(i) {
    i.addEventListener("click", displayModal)
});

if(modalNoBtn) {
    modalNoBtn.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", () => {
    // mobileNav.style.display = "none";
    closeModal();
    mobileNav.classList.remove('open');
});

toggleBtn.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // mobileNav.style.display = "block";
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});