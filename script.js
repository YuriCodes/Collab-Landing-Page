const buttons = document.querySelectorAll('.togglebutton')

function toggleMenu(){
    let mobileMenu = document.getElementById('mobile-nav')
    if(mobileMenu.classList.contains('mobile-nav-open')){
        mobileMenu.classList.remove('mobile-nav-open')
    } else {
        mobileMenu.classList.add('mobile-nav-open')
    }
}

buttons.forEach(button => {
    button.addEventListener('click', toggleMenu)
})
