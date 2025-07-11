// Scroll suave para os separadores
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const imgLightbox = document.getElementById('imgLightbox');
  const caption = document.getElementById('caption');
  const btnClose = document.getElementById('close');
  const imgsTrigger = document.querySelectorAll('.clickable-image');

  imgsTrigger.forEach(img => {
  img.addEventListener('click', () => {
    const largeSrc = img.dataset.large;
    const captionElement = img.closest('figure').querySelector('figcaption');
    const captionHTML = captionElement.innerHTML;

    // Atualiza a imagem e a legenda no lightbox
    document.getElementById('imgLightbox').src = largeSrc;
    document.getElementById('caption').innerHTML = captionHTML;

    // Mostra a lightbox
    document.getElementById('lightbox').style.display = 'flex';
  });
});

  // Fechar ao clicar no botão
  btnClose.addEventListener('click', () => {
    // Esconder a lightbox
    lightbox.style.display = 'none';
  });

  // Fechar clicando fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});