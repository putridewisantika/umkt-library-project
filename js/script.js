// event pada saat link
$('.page-scroll').on('click', function(e) {
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');
   
    e.preventDefault();

});


// parallax
// about
$(window).scroll(function() {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
});


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    // gallery
    if( wScroll > $('.gallery').offset().top - 250 ) {
        $('.gallery .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.gallery .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        

    }



});









