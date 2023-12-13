document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('courseAccordion');
  
    accordion.addEventListener('click', function (event) {
      const accordionItem = event.target.closest('.accordion-item');
  
      if (accordionItem) {
        accordionItem.classList.toggle('show');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var tooltips = new bootstrap.Tooltip(document.body, {
      selector: '[data-bs-toggle="tooltip"]',
      container: 'body'
    });
  });
  