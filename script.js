const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

//! добавим событие по клику на иконку
// сделаем проверку на наличие иконки бургер

if (iconMenu) {
  iconMenu.addEventListener('click', onBurgerClick);

  function onBurgerClick(event) {
    document.body.classList.toggle('lock')
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  }
}

//! закрытие меню при клике на  раздел меню бургера
// сделаем проверку на наличие списка меню

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    event.preventDefault();
    const menuLink = event.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth'
    });

    if(iconMenu.classList.contains('active')) {
      document.body.classList.remove('lock')
      iconMenu.classList.remove('active');
      menuBody.classList.remove('active');
    }
  }
}
// Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
// pageYOffset - Количество пикселей, на которое документ Document прокручен вертикально в рамках окна Window, выражено числом с плавающей запятой.
// HTMLElement.offsetHeight - высота элемента с учётом вертикальных полей и границ в пикселях. Свойство неизменяемое, только для чтения. Возвращаемое значение - целочисленное.