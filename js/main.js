$(function(){

    $('.btn-card-org').click(function() {
        
        $(this).toggleClass('active')
               
    })

    $('.btn-card-varie').click(function() {

        let btnCard = $(this).parent().find('.btn-card-org')

        if( !btnCard.hasClass('active') ) {
            alert('Escolha "Não Orgânico","Orgânico" ou ambos.')
        }

    })

    let item = $('a.num')
    $('a.num').click(function() {
        if ( item.hasClass('active') ) {
            item.removeClass('active')
            $(this).addClass('active')
        }
    })

    $('#btn-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        })
    })

    $('[data-toggle="tooltip"]').tooltip()

    /*Evento no botão de recuperação de senha*/
    $('#link-recup').click(function () {
        $('#mod-login').toggleClass('mostrar')
    })

})