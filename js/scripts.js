$(document).ready(function() {  //usamos JQuery

    let navItem = $('.nav-item');

    let  page_home = $('#nav-container')
    let  page_pokemons = $('#cards-pokemons');
    let  page_time = $('#cards-time');
    let  page_contato = $('#contact-area');

    let scrollTo = '';

    $(navItem).click(function() {

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-pokemon') {
            scrollTo = page_pokemons;
        } else if(btnId == 'team') {
            scrollTo = page_time;
        } else if(btnId == 'home-menu') {
            scrollTo = page_home;
        } else {
            scrollTo = page_contato;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1000);
    });
});