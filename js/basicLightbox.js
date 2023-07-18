const refs = {
  accordion: document.querySelector('.accordion'),
};
refs.accordion.addEventListener('click', onVideoClick);

function onVideoClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  showModal();
}

let instance;

function showModal() {
  instance = basicLightbox.create(`
      <div class="modal">
        <iframe       
                      src="https://www.youtube.com/embed/YTR0C8R1C6I"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>

      </div>
  `);
  instance.show();
  onModalOpen();
}

function onModalOpen() {
  window.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    instance.close();
    onModalClose();
  }
}

function onModalClose() {
  window.removeEventListener('keydown', onEscPress);
}
