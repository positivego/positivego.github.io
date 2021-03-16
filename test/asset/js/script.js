
let menuBtns = document.querySelectorAll('.menu-button');

menuBtns.forEach(button => {

    if (button.classList.contains('menu-button-active')) active_button = button;

    button.addEventListener('mouseenter', () => {

        active_button.classList.remove('menu-button-active');
        button.classList.add('menu-button-active');

    });

    button.addEventListener('mouseleave', () => {

        button.classList.remove('menu-button-active');
        active_button.classList.add('menu-button-active');

    });

});