$(document).ready(function () {
    //$('.slider').bxSlider();
    // ouvrir le menu au clic sur l'icone menu

    $('.icone-menu').click(function () {
        $(this).hide();
        $(".site-nav").show(200);
        $(".menu").slideDown('slow');
        $(".icone-fermer").show(500);

    }) // fermer le menu au clic sur l'icone fermer

    $('.icone-fermer').click(function () {
        $(".icone-fermer").hide();
        $(".icone-menu").show();
        $(".menu").slideUp('fast')
    })

});
