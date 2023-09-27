$(window).scroll(function(){
    var winScroll = $(this).scrollTop();
    console.log(winScroll);

    $('.bg').css({
        'transform': 'translate(0, '+ winScroll / 8 + '% )'
    })

    $('.bg2').css({
        'transform': 'translate(0, '+ winScroll / 12 + '% )'
    })

    $('.bg3').css({
        'transform': 'translate(0, '+ winScroll / 18 + '% )'
    })

    $('.bg4').css({
        'transform': 'translate(0, '+ winScroll / 26 + '% )'
    })
})