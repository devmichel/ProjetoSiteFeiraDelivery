$(function(){

    //Função que seleciona Organico/Não Organico dos cards
    $('.btn-card-org').click(function() {
        
        $(this).toggleClass('active')
               
    })

    //Função que aciona um alerta casa nenhuma opção dos cards seja selecionado
    $('.btn-card-varie').click(function() {

        let btnCard = $(this).parent().find('.btn-card-org')

        if( !btnCard.hasClass('active') ) {
            alert('Escolha "Não Orgânico","Orgânico" ou ambos.')
        }

    })

    //Função para paginação
    let item = $('a.num')
    $('a.num').click(function() {
        if ( item.hasClass('active') ) {
            item.removeClass('active')
            $(this).addClass('active')
        }
    })

    //Função de animação do botão de scrooltop
    $('#btn-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        })
    })
    //Função que ativa os tolltip da pagina
    $('[data-toggle="tooltip"]').tooltip()

    //Evento no botão de recuperação de senha
    $('#link-recup').click(function () {
        $('#mod-login').toggleClass('mostrar-recup')
    })

    //Função que ativa o evento dos modais
    $('.mod-login').click(function() {
        $('.mod-box').addClass('mostrar')
        $('#mod-login').addClass('mostrar-this')
    })
    $('.mod-cadastro').click(function() {
        $('.mod-box').addClass('mostrar')
        $('#mod-cadastro').addClass('mostrar-this')
    })
    //Função que fecha o modal
    $('.btn-close-modal').click(()=> {
        $('.mod-box').removeClass('mostrar')
        $('#mod-login, #mod-cadastro').removeClass('mostrar-this')
        $('#mod-login').removeClass('mostrar-recup')
    })

})