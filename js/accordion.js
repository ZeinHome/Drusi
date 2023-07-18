const accordion = document.querySelector('.accordion');

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
