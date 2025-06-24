
document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let fName = document.getElementById('first-name').value.trim();
  let lName = document.getElementById('last-name').value.trim();
  let email = document.getElementById('email').value.trim();
  let phone = document.getElementById('phone').value.trim();
  let address = document.getElementById('address').value.trim();
  let contact = document.getElementById('contact-u').value.trim();
  let insYes = document.getElementById('insurance-yes').checked;
  let insNo = document.getElementById('insurance-no').checked;

  const nameValid = /^[a-zA-Z\s]+$/;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneValid = /^[0-9]{10}$/;

  let error = [];

  if (!nameValid.test(fName)) {
    error.push("Please enter a valid First Name")
  }
  if (!nameValid.test(lName)) {
    error.push("Please enter a valid Last Name")
  }
  if (!emailValid.test(email)) {
    error.push("Please enter a valid email ")
  }
  if (!phoneValid.test(phone)) {
    error.push("Please enter a valid 10-digit numbers")
  }
  if (address.length < 5) {
    error.push("Please enter a Full address")
  }
  if (contact === "") {
    error.push("Please select a contact method")
  }
  if (!(insYes || insNo)) {
    error.push("Please select a check-box")
  }
  if (error.length > 0) {
    alert(error.join('\n'));
  } else {
    alert('Form submitted successfully! We will get back to you once valid');
  }
});
document.getElementById("insurance-yes").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("insurance-no").checked = false;
  }
});

document.getElementById("insurance-no").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("insurance-yes").checked = false;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const clinicDataItems = document.querySelectorAll('.clinic-data');
  const displayImg = document.querySelector('.clinic-client-img img');
  const imgContainer = document.querySelector('.clinic-client-img');

  const imagePaths = [
    'images/doc.avif',
    'images/billing.webp',
    'images/group-doc.jpg',
    'images/friendly-doc.webp',
    'images/doc-clock.jpg',
    'images/doc-call.webp'
  ];

  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
  clinicDataItems[0].classList.add('active');

  clinicDataItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) return;

      displayImg.style.opacity = '0';
      setTimeout(() => {
        displayImg.src = imagePaths[index] || './images/section1.jpg';

        clinicDataItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        setTimeout(() => {
          displayImg.style.opacity = '1';
        }, 50);
      }, 300);
    });
  });

  setTimeout(() => {
    displayImg.style.opacity = '1';
  }, 100);
});


document.addEventListener('DOMContentLoaded', function () {
  let questionData = document.querySelectorAll('.question-more');
  let paraData = document.querySelectorAll('.para');
  let icons = document.querySelectorAll('.question-icon i');
  paraData[0].classList.add('active');
  icons[0].style.transform = 'rotate(180deg)';
  questionData.forEach((question, index) => {
    question.addEventListener('click', () => {
      const isActive = paraData[index].classList.contains('active');
      paraData.forEach(item => item.classList.remove('active'));
      icons.forEach(icon => icon.style.transform = 'rotate(0deg)');
      if (!isActive) {
        paraData[index].classList.add('active');
        icons[index].style.transform = 'rotate(180deg)';
      }
    });
  });
});


let isSlick= false;
function sliderTestimonial(){
  const $testimoData= $('.testimonial-data');
  const $testContent= $testimoData.children('.testimonial-content');

  if(window.innerWidth <= 768){
    if(!isSlick){
      $testContent.wrapAll('<div class="testimonial-slider"></div>');

      $('.testimonial-slider').slick({
        dots:false,
        arrows:true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
      });
      isSlick =true;
    }
  }else{
    if(isSlick){
      $('.testimonial-slider').slick('unslick');
      const $slider = $('.testimonial-slider');
        $slider.children().unwrap();

        isSlick = false;
    }
  }
}
let isContactSlick= false;
function contactSlide(){
  const $conContent= $('.contact-content');
  const $conData= $conContent.children('.contact-data');
  if(window.innerWidth<=576){
    if(!isContactSlick){
      $conData.wrapAll('<div class="contact-slider"></div>');
      $('.contact-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,    
      });
      isContactSlick= true;
    }
  }else{
    if(isContactSlick){
      $('.contact-slider').slick('unslick');
      const $slider = $('.contact-slider');
      $slider.children().unwrap();
      isContactSlick= false
    }
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });
  
  $('.video-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '5%'
        }
      }
    ]
  });

  $('.play-overlay').on('click', function() {
    $('.video').addClass('active');
    $('.video').removeClass('closing');
  });
  
  $('.video').on('click', function(e) {
    if ($(e.target).is('.video, .close-btn, .close-btn i')) {
      $(this).addClass('closing');
  
      setTimeout(() => {
        $(this).removeClass('active closing');
      }, 400 ); 
    }
  });

  sliderTestimonial();
    $(window).on('resize', sliderTestimonial);
    contactSlide(); 
    $(window).on('resize', contactSlide );

});
$(document).ready(function(){
 
});

document.addEventListener('DOMContentLoaded', function(){
  const bars= document.createElement('div');
  bars.classList.add('nav-toggle');
  bars.innerHTML= ('<i class="fas fa-bars"></i>');
  const closeIcon = document.createElement('div');
  closeIcon.classList.add('nav-close');
  closeIcon.innerHTML= '<i class="fas fa-times"></i>';
  const nav= document.querySelector('nav');
  nav.appendChild(bars);
  const navMenu= nav.querySelector('ul');
  navMenu.insertBefore(closeIcon, navMenu.firstChild);
  bars.addEventListener('click', function () {
    navMenu.classList.add('show');
    bars.style.display = 'none';
  });
  closeIcon.addEventListener('click', function () {
    navMenu.classList.remove('show');
    bars.style.display = 'block';
  });
});


// console.log("hi");