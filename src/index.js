const openBtn = document.getElementById("js-open-btn");
const closeBtn = document.getElementById("js-close-btn");
const modal = document.getElementById("js-modal");


openBtn.onclick = () => {
  modal.style.opacity = "1";
  modal.style.zIndex = "1";
};

closeBtn.onclick = () => {
  modal.style.opacity = "0";
  modal.style.zIndex = "-1";

};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
  }
};

