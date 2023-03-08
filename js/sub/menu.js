const breakfast = document.querySelector(".breakfast");
const menus = document.querySelector(".menus");
const drinks = document.querySelector(".drinks");
const kids = document.querySelector(".kids");
const free = document.querySelector(".free");
const sunday = document.querySelector(".sunday");

const overlayBreakfast = document.querySelector(".overlay-breakfast");
const overlayMenus = document.querySelector(".overlay-menus");
const overlayDrinks = document.querySelector(".overlay-drinks");
const overlayKids = document.querySelector(".overlay-kids");
const overlayFree = document.querySelector(".overlay-free");
const overlaySunday = document.querySelector(".overlay-sunday");

const btnCloseModalBreakfast = document.querySelector(".close-modal-breakfast");
const btnCloseModalMenus = document.querySelector(".close-modal-menus");
const btnCloseModalDrinks = document.querySelector(".close-modal-drinks");
const btnCloseModalKids = document.querySelector(".close-modal-kids");
const btnCloseModalFree = document.querySelector(".close-modal-free");
const btnCloseModalSunday = document.querySelector(".close-modal-sunday");

const btnsOpenModalBreakfast = document.querySelector(".btn-breakfast");
const btnsOpenModalMenus = document.querySelector(".btn-menus");
const btnsOpenModalDrinks = document.querySelector(".btn-drinks");
const btnsOpenModalKids = document.querySelector(".btn-kids");
const btnsOpenModalFree = document.querySelector(".btn-free");
const btnsOpenModalSunday = document.querySelector(".btn-sunday");

// //OPEn
const openModalBreakfast = function () {
  breakfast.classList.remove("hidden");
  overlayBreakfast.classList.remove("hidden");
};

const openModalMenus = function () {
  menus.classList.remove("hidden");
  overlayMenus.classList.remove("hidden");
};

const openModalDrinks = function () {
  drinks.classList.remove("hidden");
  overlayDrinks.classList.remove("hidden");
};

const openModalKids = function () {
  kids.classList.remove("hidden");
  overlayKids.classList.remove("hidden");
};

const openModalFree = function () {
  free.classList.remove("hidden");
  overlayFree.classList.remove("hidden");
};

const openModalSunday = function () {
  sunday.classList.remove("hidden");
  overlaySunday.classList.remove("hidden");
};

// //CLOSE
const closeModalBreakfast = function () {
  breakfast.classList.add("hidden");
  overlayBreakfast.classList.add("hidden");
};

const closeModalMenus = function () {
  menus.classList.add("hidden");
  overlayMenus.classList.add("hidden");
};

const closeModalDrinks = function () {
  drinks.classList.add("hidden");
  overlayDrinks.classList.add("hidden");
};

const closeModalKids = function () {
  kids.classList.add("hidden");
  overlayKids.classList.add("hidden");
};

const closeModalFree = function () {
  free.classList.add("hidden");
  overlayFree.classList.add("hidden");
};

const closeModalSunday = function () {
  sunday.classList.add("hidden");
  overlaySunday.classList.add("hidden");
};
// //OPEN FUNCTIONS
btnsOpenModalBreakfast.addEventListener("click", openModalBreakfast);
btnsOpenModalMenus.addEventListener("click", openModalMenus);
btnsOpenModalDrinks.addEventListener("click", openModalDrinks);
btnsOpenModalKids.addEventListener("click", openModalKids);
btnsOpenModalFree.addEventListener("click", openModalFree);
btnsOpenModalSunday.addEventListener("click", openModalSunday);

// //CLOSE FUNCTIONS
btnCloseModalBreakfast.addEventListener("click", closeModalBreakfast);
btnCloseModalMenus.addEventListener("click", closeModalMenus);
btnCloseModalDrinks.addEventListener("click", closeModalDrinks);
btnCloseModalKids.addEventListener("click", closeModalKids);
btnCloseModalFree.addEventListener("click", closeModalFree);
btnCloseModalSunday.addEventListener("click", closeModalSunday);

overlayBreakfast.addEventListener("click", closeModalBreakfast);
overlayMenus.addEventListener("click", closeModalMenus);
overlayDrinks.addEventListener("click", closeModalDrinks);
overlayKids.addEventListener("click", closeModalKids);
overlayFree.addEventListener("click", closeModalFree);
overlaySunday.addEventListener("click", closeModalSunday);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !breakfast.classList.contains("hidden")) ||
    (e.key === "Escape" && !menus.classList.contains("hidden")) ||
    (e.key === "Escape" && !drinks.classList.contains("hidden")) ||
    (e.key === "Escape" && !kids.classList.contains("hidden")) ||
    (e.key === "Escape" && !free.classList.contains("hidden")) ||
    (e.key === "Escape" && !sunday.classList.contains("hidden"))
  ) {
    closeModalBreakfast();
    closeModalMenus();
    closeModalDrinks();
    closeModalKids();
    closeModalFree();
    closeModalSunday();
  }
});
