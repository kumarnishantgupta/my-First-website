
// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Hamburger Menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeBtn = document.getElementById('close-btn');
const menuLinks = document.querySelectorAll('.fullscreen-menu a'); // All menu links

// Open Menu
hamburgerIcon.addEventListener('click', () => {
    fullscreenMenu.classList.add('show');
});

// Close Menu
closeBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('show');
});

// Close menu on clicking any menu link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('show');
    });
});
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
let lastScrollTop = 0;
const movingtex = document.querySelector('.movingtex');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Hide tex line on scroll down
    movingtex.style.transform = 'translateY(-300%)';
  } else {
    // Show line on scroll up
    movingtex.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure lastScrollTop is never negative
});
