const dropdownIcon = document.querySelector('.dropdown');
const mobileNav = document.querySelector('.mobileNav');
const blur = document.querySelector('.mobile-nav-overlay');




dropdownIcon.addEventListener("click", ()=>{
    dropdownIcon.classList.toggle('isActive');
    mobileNav.classList.toggle('isActive');
    blur.classList.toggle('isActive');
});

blur.addEventListener("click", () =>{
    dropdownIcon.classList.toggle('isActive');
    mobileNav.classList.toggle('isActive');
    blur.classList.toggle('isActive');
})