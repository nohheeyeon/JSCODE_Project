document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home');
    const serviceButton = document.querySelector('li[name="service"]');
    const processButton = document.querySelector('li[name="process"]');
  
    homeButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    serviceButton.addEventListener('click', function(event) {
      event.preventDefault();
      const serviceSection = document.getElementById('service');
      const serviceSectionTop = serviceSection.offsetTop;
      window.scrollTo({
        top: serviceSectionTop,
        behavior: 'smooth'
      });
    });
  
    processButton.addEventListener('click', function(event) {
      event.preventDefault();
      const processSection = document.getElementById('process');
      const processSectionTop = processSection.offsetTop;
      window.scrollTo({
        top: processSectionTop,
        behavior: 'smooth'
      });
    });
  });
  