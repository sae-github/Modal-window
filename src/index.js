const openBtn = document.getElementById('js-open-btn');
const closeBtn = document.getElementById('js-close-btn');
const overLay = document.getElementById('js-overlay');
const modal = document.getElementById('js-modal');

openBtn.addEventListener('click',function() {
  modal.classList.add('is-show');
  overLay.classList.add('is-show');
});
closeBtn.addEventListener('click',function() {
  modal.classList.remove('is-show');
  overLay.classList.remove('is-show');
});
overLay.addEventListener('click',function() {
  this.classList.remove('is-show');
  modal.classList.remove('is-show');
});
