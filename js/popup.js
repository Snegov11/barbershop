//Описываем переменные модального окна регистрации
var popup_login = document.querySelector(".modal-login");
var link_login = document.querySelector(".cont__login_item");
var close_login = popup_login.querySelector(".modal-close");
var login = popup_login.querySelector("[name=login]");
var password = popup_login.querySelector("[name=password]");
var form = popup_login.querySelector("form");

var storage = "";
var isStorageSupport = true;

//Проверка существования local storage 
try {
    storage = localStorage.getItem("login");    
} catch (err) {
    isStorageSupport = false;
}

//Открываем модальное окно при клике по ссылке ВХОД, путём добавления
//подключения нового свойста CSS modal-show к модальному окну и отключения display:none;
//Подставляем фокус курсора автоматом в поле password, если имеем сохраннёный логин и он автоматом подставлен в login
link_login.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_login.classList.add("modal-show"); 
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
    login.focus();    
    }
})

//Закрываем модальное окно при клике на крестик, путём отключения свойста CSS modal-show
close_login.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popup_login.classList.remove("modal-show");
    popup_login.classList.remove("modal-error");
})

//Проверяем заполненность полей формы и сохраняем данные login в local storage
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault ();
    popup_login.classList.remove("modal-error");
    popup_login.offsetWidth = popup_login.offsetWidth;
    popup_login.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);    
        }            
    }
})

//В окне браузера мы обрабатываем событие - нажатие клавиши. Проверяем код нажатой клавиши Esc.
//Проверяем что модальное окно открыто, отменяем действие по умолчанию и удаляем свойство CSS modal-show.
//Модальное окно закрывается после нажаттия Esc  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup_login.classList.contains("modal-show")) {
            evt.preventDefault ();
            popup_login.classList.remove("modal-show");
            popup_login.classList.remove("modal-error");
        }
    }
});