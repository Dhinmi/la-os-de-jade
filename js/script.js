function menuShow() {
    let MenuMobile = document.querySelector('.mobile-menu');
    if (MenuMobile.classList.contains('open')) {
        MenuMobile.classList.remove('open');
        document.querySelector('.icon').src ="img/menu.png"
    } else {
      MenuMobile.classList.add('open');
      document.querySelector('.icon').src ="img/close.png"
    }
  }

  
  let slideIndex = 0;
  let timer;
  
  function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
  }
  
  function nextImage() {
    slideIndex++;
    showSlides();
  }
  
  function prevImage() {
    slideIndex--;
    showSlides();
  }
  
  function startCarousel() {
    timer = setInterval(() => {
      slideIndex++;
      showSlides();
    }, 8000); 
  }
  
  function stopCarousel() {
    clearInterval(timer);
  }
  
  startCarousel();
