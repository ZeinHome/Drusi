const accordion = document.querySelector('.accordion');
const accordionPanels = document.querySelectorAll('.accordion-panel');

accordion.addEventListener('click', (e) => {
  const activePanel = e.target.closest('.accordion-panel');
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const buttons =
    panelToActivate.parentElement.querySelectorAll('button');

  buttons.forEach((button) => {
    button.setAttribute('aria-expanded', false);
  });

  panelToActivate
    .querySelector('button')
    .setAttribute('aria-expanded', true);
}

accordion.addEventListener('click', (e) => {
  accordionPanels.forEach((panel) => {
    const btn = panel.querySelector('.accordion-trigger');

    setTimeout(() => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        const controls = btn.getAttribute('aria-controls');

        switch (controls) {
          case 'panel1-content':
            accordion.style.gridTemplateColumns = ' 5fr 1fr 1fr';
            break;
          case 'panel2-content':
            accordion.style.gridTemplateColumns = ' 1fr 5fr 1fr';
            break;
          case 'panel3-content':
            accordion.style.gridTemplateColumns = ' 1fr 1fr 5fr';
            break;
        }
      }
    }, 10);
  });
});
