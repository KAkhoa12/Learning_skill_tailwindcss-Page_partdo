const tabProducts = document.querySelectorAll('#tab-products-home li');
const tabLinkProducts = document.querySelectorAll('#tab-products-home li a');

$(document).ready(function(){
    $('#category-list-HomePage').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:true,
        centerPadding: '60px',
        responsive: [
          {
            breakpoint: 821,
            settings: {
              centerPadding: '40px',
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }
        ]
    });
    $('#user_rating').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 821,
          settings: {
            centerPadding: '40px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
    $('#logo_brand').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 821,
          settings: {
            centerPadding: '40px',
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        }
      ]
    });
});

var countDown = setInterval(function() {
    var now = new Date();
    var targetDate = new Date(2023, 4, 31); 
    var distance = targetDate.getTime() - now.getTime();
    var itemsDays = document.querySelectorAll('.day-items');
    var itemsHours = document.querySelectorAll('.hour-items');
    var itemsMinutes = document.querySelectorAll('.minute-items');
    var itemsSeconds = document.querySelectorAll('.seconds-items');

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    [...itemsDays].forEach((e) => {
      e.innerHTML = days;
    });
    [...itemsHours].forEach((e) => {
      e.innerHTML = hours;
    });
    [...itemsMinutes].forEach((e) => {
      e.innerHTML = minutes;
    });
    [...itemsSeconds].forEach((e) => {
      e.innerHTML = seconds;
    });

    if (distance <= 0) {
      clearInterval(countDown);
    } else {
      distance -= 1000;
      console.log(distance);
    }
  }, 1000);