if (window.innerWidth > 1023) {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    scrollOverflow: true,
    anchors: ['hero', 'about', 'services', 'casses'],
    scrollingSpeed: 1000,
    afterLoad: function (origin, destination, direction) {
      var currentSection = destination.item;
      var previousSection = origin && origin.item;

      if (
        currentSection.classList.contains('about-section') ||
        currentSection.classList.contains('services-section') ||
        currentSection.classList.contains('casses-section') ||
        previousSection.classList.contains('about-section') ||
        previousSection.classList.contains('services-section') ||
        previousSection.classList.contains('casses-section')
      ) {
        currentSection
          .querySelectorAll('.fade-in')
          .forEach(function (element) {
            element.classList.add('active');
          });
      }
    },
  });
}
