const heroBtn = document.querySelector(".hero-btn");
const backdrop = document.querySelector(".backdrop");
const modalOrder = document.querySelector(".modal-order");
const closeBtn = document.querySelector(".m-o-close-btn");

heroBtn.addEventListener("click", function () {
  backdrop.classList.add("is-open");
  modalOrder.classList.add("is-open");
});

closeBtn.addEventListener("click", function () {
  backdrop.classList.remove("is-open");
  modalOrder.classList.remove("is-open");
});
