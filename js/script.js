// Show button when scrolling down
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Smooth scroll to top
  document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });










  // Wait for page load
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  });




  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const menuClose = document.getElementById('menuClose');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.add('show');
    hamburger.classList.add('active');
  });
  
  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
  });

  



  const cookieBanner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');
  
  if (!localStorage.getItem('cookiesAccepted')) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
      // Show banner when user reaches 90% of page
      if (scrollTop / docHeight > 0.9) {
        cookieBanner.classList.add('show');
      }
    });
  }
  
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');
  });
  



  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });