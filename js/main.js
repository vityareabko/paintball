$(document).ready(function(){

    $("#navToggle").click(function() {
        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked"); 
        
    });
    $(".menu__item").on("click", function(){
        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked"); 
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        margin: 0,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $("#my_nanogallery2").nanogallery2({
        itemsBaseURL: 'http://nanogallery2.nanostudio.org/samples/',
        thumbnailLabel: {
            "display": false
        },
        thumbnailHeight:  200,
        thumbnailWidth:   300,
        thumbnailHoverEffect2:  "toolsAppear|imageBlurOn|imageScale150",
        thumbnailAlignment: 'center'
      });
    


      //----------------------------------------------------------------------------
      $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
    
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top-130}, 800);
        });
    });



});