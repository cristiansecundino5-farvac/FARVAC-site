
(function(){
  // Testimonios slider
  const slider = document.querySelector('#testimonios .slider');
  if (slider){
    const slides = [...slider.querySelectorAll('figure')];
    let i = slides.findIndex(s => s.hasAttribute('data-active'));
    const show = n => {
      slides[i].removeAttribute('data-active');
      i = (n + slides.length) % slides.length;
      slides[i].setAttribute('data-active','');
    };
    slider.querySelector('.next').addEventListener('click', () => show(i+1));
    slider.querySelector('.prev').addEventListener('click', () => show(i-1));
    // Auto-advance
    setInterval(() => show(i+1), 8000);
  }
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
