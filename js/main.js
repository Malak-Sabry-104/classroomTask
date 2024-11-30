const rowParent = document.querySelector(".row");
const imgs = [
  "imgs/circus.png",
  "imgs/cabin.png",
  "imgs/game.png",
  "imgs/submarine.png",
  "imgs/cake.png",
  "imgs/safe.png",
];
function addItems(img) {
  rowParent.innerHTML += `<div class="slide col-4 p-3">
              <div class="inner position-relative">
                <img src="${img}" alt="" class="w-100" />
                <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center">
                  <button class="btn add-btn"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>`;
}
imgs.forEach(addItems);