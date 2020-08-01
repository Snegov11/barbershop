//Описываем переменные модального окна карты
var popup_map = document.querySelector(".modal-map");
var link_map = document.querySelector(".contacts_map");
var close_map = popup_map.querySelector(".modal-close");
var link_map_footer = document.querySelector(".footer__cont_map");

//Открытие модального окна карты при нажатии на ссылку "Как нас найти?"
link_map.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_map.classList.add("modal-show-map"); 
})
link_map_footer.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_map.classList.add("modal-show-map"); 
})

//Закрытие модального окна карты
close_map.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_map.classList.remove("modal-show-map");
})

//В окне браузера мы обрабатываем событие - нажатие клавиши. Проверяем код нажатой клавиши Esc.
//Проверяем что модальное окно карты открыто, отменяем действие по умолчанию и удаляем свойство CSS modal-show-map.
//Модальное окно карты закрывается после нажаттия Esc  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup_map.classList.contains("modal-show-map")) {
            evt.preventDefault ();
            popup_map.classList.remove("modal-show-map");
        }
    }
});