
// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content'); // Ensure content exists

  setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
          preloader.style.display = 'none';
          content.style.display = 'block';
      }, 500); // Smooth transition
  }, 3000); // Total wait time
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

/* alert box for our section*/

document.querySelectorAll('#services .service').forEach(service => {
  service.addEventListener('click', (e) => {
    e.preventDefault();
    
    const customAlert = document.createElement('div');
    customAlert.style.position = 'fixed';
    customAlert.style.top = '50%';
    customAlert.style.left = '50%';
    customAlert.style.transform = 'translate(-50%, -50%)';
    customAlert.style.padding = '20px';
    customAlert.style.backgroundColor = '#222';
    customAlert.style.color = '#fff';
    customAlert.style.borderRadius = '12px';
    customAlert.style.zIndex = '9999';
    customAlert.style.textAlign = 'center';
    customAlert.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.5)';
    customAlert.style.opacity = '0';
    customAlert.style.transition = 'opacity 0.3s ease-in-out';
    customAlert.innerHTML = `
      <div style="text-align: right;">
        <span id="custom-alert-close" style="cursor: pointer; font-size: 18px; color: #ff4d4d; font-weight: bold;">&times;</span>
      </div>
      <p style="margin-top: 10px; font-size: 16px;">🚧 This service is currently under maintenance.<br>You will be redirected to an error page.</p>
      <button id="custom-alert-btn" style="margin-top: 15px; padding: 10px 20px; background: #ff4d4d; border: none; color: white; font-size: 16px; border-radius: 8px; cursor: pointer; transition: background 0.3s ease;">OK</button>
    `;

    document.body.appendChild(customAlert);

    // Fade-in animation
    setTimeout(() => {
      customAlert.style.opacity = '1';
    }, 50);

    // OK button click event
    document.getElementById('custom-alert-btn').addEventListener('click', () => {
      customAlert.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(customAlert);
        window.location.href = 'error.html';
      }, 300);
    });

    // Close icon click event
    document.getElementById('custom-alert-close').addEventListener('click', () => {
      customAlert.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(customAlert);
      }, 300);
    });
  });
});
