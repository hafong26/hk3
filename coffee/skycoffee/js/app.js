$(document).ready(function() {
    fade()
    scrollAnimation()

    function scrollAnimation() {
        $(window).scroll(function() {
            var document_scroll = $(document).scrollTop();
            var f0 = $('.f0')
            var pos_f0 = new Array()
            var h_window = $(window).innerHeight()
            for (i = 0; i < f0.length; i++) {
                pos_f0[i] = $(f0).eq(i).offset().top
                if (document_scroll > pos_f0[i] - h_window)
                    $(f0).eq(i).animate({
                        left: 0,
                        top: 0
                    })
            }
        })
        var document_scroll = $(document).scrollTop();
        var f0 = $('.f0')
        var pos_f0 = new Array()
        var h_window = $(window).innerHeight()
        for (i = 0; i < f0.length; i++) {
            pos_f0[i] = $(f0).eq(i).offset().top
            if (document_scroll > pos_f0[i] - h_window)
                $(f0).eq(i).animate({
                    left: 0,
                    top: 0
                })
        }
    }

    function fade() {
        var pos_body = $(document).scrollTop();
        if (pos_body > 150)
            fadeEffect();
        $(window).scroll(function() {
            var pos_body = $(document).scrollTop();
            var h1_header = $('header h1').innerHeight();
            if (pos_body > h1_header)
                $('.navbar').css('position', 'fixed')
            else
                $('.navbar').css('position', 'relative')
            if (pos_body > 150)
                fadeEffect()

        });
    }

    function fadeEffect() {
        for (i = 1; i <= 6; i++) {
            $('.ft-' + i).animate({
                top: 0,
                opacity: 1
            }, i * 200 + 400);
        }
        for (i = 1; i <= 4; i++) {
            $('.fl-' + i).animate({
                left: 0,
                opacity: 1
            }, i * 200 + 400);
        }
        for (i = 1; i <= 4; i++) {
            $('.fr-' + i).animate({
                left: 0,
                opacity: 1
            }, i * 200 + 400);
        }
    }
    // Index
    $('.btn-more-offer').click(function() {
        $('.menu-hot .container>.row:eq(1)').clone().appendTo('.add-offer').hide().fadeIn()
    });

    // Order
    loadItemCoffee()
    loadItemCake()
    addItem()
    addItem2()

    function loadItemCoffee() {
        $('.btn-more1').click(function() {
            addItemPlus()
            $(this).fadeOut()
        });
    }

    function loadItemCake() {
        var d = 0;
        $('.btn-more2').click(function() {
            addItem2()
            $(this).removeClass('d-none-' + d).addClass('d-none-' + ++d)
        })
    }

    function addItem() {
        var divAddItem = $('.menu').find('.col-xl-4')
        for (let i = 0; i < 16 - 4; i++) {
            setTimeout(function timer() {
                j = i + 4
                k = i % 3
                $('#pseudo-img').clone().appendTo(divAddItem.eq(k)).hide().fadeIn().find('img').attr('src', '../images/order/coffee/cf' + j + '.jpg')
            }, i * 200);
        }
    }

    function addItemPlus() {
        var divAddItem = $('.menu').find('.col-xl-4')
        for (let i = 0; i < 16 - 4; i++) {
            setTimeout(function timer() {
                j = i + 16
                k = i % 3
                $('#pseudo-img').clone().appendTo(divAddItem.eq(k)).hide().fadeIn().find('img').attr('src', '../images/order/coffee/cf' + j + '.jpg')
            }, i * 200);
        }
    }

    function addItem2() {
        var divAddItem = $('.menu2').find('.col-xl-4')
        for (let i = 0; i < 9; i++) {
            setTimeout(function timer() {
                j = i + 1 + 3
                k = i % 3
                $('#pseudo-img').clone().appendTo(divAddItem.eq(k)).hide().fadeIn().find('img').attr('src', '../images/order/cake/cake' + j + '.jpg')
            }, i * 200);
        }
    }

});