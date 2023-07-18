(() => {
  const refs = {
    menuBtnRef: document.querySelector('[data-menu-button]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    mobileMenuRef: document.querySelector('[data-menu]'),
    navigation: document.querySelector('.navigation'),
  };

  refs.menuBtnRef.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.navigation.addEventListener('click', closeModal);
  function toggleModal() {
    refs.mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
  function closeModal(e) {
    if (e.target.nodeName !== 'A') {
      return;
    }
    refs.mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
