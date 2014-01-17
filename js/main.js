/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();
});

$(document).on('ready', function(){
    $('.profile__tabs__item__link').on('click', function(event){
        event.preventDefault();

        if ( ! $(this).hasClass('profile__tabs__item__link_active') ) {
            $('.profile__tabs__item__link_active').removeClass('profile__tabs__item__link_active');
            $(this).addClass('profile__tabs__item__link_active');

            $('.profile__pages__item_active').fadeOut();
            $('.profile__pages__item_active').removeClass('profile__pages__item_active');
            $( $(this).data('page') ).addClass('profile__pages__item_active');
            $( $(this).data('page') ).fadeIn();
        }

    });
});
