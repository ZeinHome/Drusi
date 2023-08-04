const refs = {
  accordion: document.querySelector('.accordion'),
};
const frameObj = {
  frame1:
    '<iframe src="https://www.youtube.com/embed/ctAgroiJRdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  frame2:
    '<iframe src="https://www.youtube.com/embed/RibWK6GnS7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  frame3:
    '<iframe src="https://www.youtube.com/embed/X0LAqGJNiBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
};

refs.accordion.addEventListener('click', onVideoClick);

function onVideoClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const src = e.target.getAttribute('src');
  let frame = null;
  switch (src) {
    case './images/preview-1.jpg':
      frame = frameObj.frame1;
      break;
    case './images/preview-2.jpg':
      frame = frameObj.frame2;
      break;
    case './images/preview-3.jpg':
      frame = frameObj.frame3;
      break;
  }
  showModal(frame);
}

let instance;

function showModal(frame) {
  instance = basicLightbox.create(`
      <div class="modal">
      ${frame}
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
