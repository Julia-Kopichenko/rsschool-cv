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
};
// Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
// pageYOffset - Количество пикселей, на которое документ Document прокручен вертикально в рамках окна Window, выражено числом с плавающей запятой.
// HTMLElement.offsetHeight - высота элемента с учётом вертикальных полей и границ в пикселях. Свойство неизменяемое, только для чтения. Возвращаемое значение - целочисленное.


//!Самооценка
console.group('%cCV Julia Kopichenko. Self-verification:', 'color: red');

console.log('1. Вёрстка валидная ' + '%c(10)', 'color: red');
console.log(
	'%c  проверено валидатором ' + '%chttps://validator.w3.org/nu/?doc=https%3A%2F%2Fconstantinetu.github.io%2Frsschool-cv%2F' + '%c – Document checking completed. No errors or warnings to show."',
	'color: blue', 'color: green', 'color: blue'
);
console.log('2. Bёрстка семантическая ' + '%c(20)', 'color: red');

console.log('%c  используются уникальные семантические теги: footer, header, main, nav, section - 5*2=10 (+10)','color: blue');

console.log('%c  используются уникальные заголовки h1, h2, h3, h4, h5 - 5*2=10 (+10)', 'color: blue');

console.log('3. Для оформления СV используются css-стили ' + '%c(10)','color: red');

console.log('4. Kонтент размещается в блоке, который горизонтально центрируется на странице, фоновый цвет, если он есть, тянется во всю ширину страницы ' + '%c(10)','color: red');

console.log('5. Bёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется ' + '%c(10)','color: red');

console.log('6. Есть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным ' + '%c(10)','color: red');

console.log('7. На странице СV присутствует изображение, пропорции не искажены, есть атрибут alt ' + '%c(10)',
	'color: red');

console.log('8. Контакты для связи и перечень навыков оформлены в виде списка ul > li ' + '%c(10)','color: red');

console.log('9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, примеры кода или выполненных проектов, информацию об образовании и уровне английского ' + '%c(10)','color: red');

console.log('10. CV содержит пример кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода использована js-библиотека highlight.js' + '%c(10)','color: red');

console.log('11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий ' + '%c(10)','color: red');

console.log('12. CV выполнено на английском языке ' + '%c(10)',	'color: red');

console.log('13. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) ' + '%c(10)','color: red');

console.log('14. %cНет видеорезюме автора CV на английском языке. Добавлю позже. (0)',	'color: red');

console.log('15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию ' + '%c(10)', 'color: red');

console.log('%cScore 150/ 160', 'color: red');

// console.log('%cСсылка на Pull Request - ' + '%', 'color: blue', 'color: green'
// );
console.groupEnd();