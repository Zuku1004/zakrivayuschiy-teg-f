/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/


const heartSvgs = document.querySelectorAll('.heart-svg');
const actionBtns = document.querySelectorAll('.content-card__action-btn');
const iconBtns = document.querySelectorAll('.content-card__icon-btn');

iconBtns.forEach((btn, index) => {
  btn.onclick = () => toggleLikeState(heartSvgs[index], actionBtns[index]);
});

actionBtns.forEach((btn, index) => {
  btn.onclick = () => toggleLikeState(heartSvgs[index], btn);
});

function toggleLikeState(heart, btn) {
  heart.classList.toggle('is-liked');
  updateBtnText(heart, btn);
}

function updateBtnText(heart, btn) {
  if (heart.classList.contains('is-liked')) {
    setTimeout(
      () => (btn.querySelector('.btn__caption').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (btn.querySelector('.btn__caption').textContent = 'Like'),
      500
    );
  }
}