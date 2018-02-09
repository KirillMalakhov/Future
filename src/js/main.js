var menuItem = document.getElementsByClassName("header__menu_list-item");
for (var i =0; i < menuItem.length; i++) {
    menuItem[i].onclick = activate; 
 }
function activate() {
    var activeItem = document.getElementsByClassName("active")[0];
    activeItem.classList.remove("active");
    this.classList.add("active");    
}

var optionItem = document.getElementsByClassName("options__selection-choice-item");
for (var i =0; i < optionItem.length; i++) {
    optionItem[i].onclick = change; 
 }
function change() {
    event.preventDefault(); 
    var optionActiveItem = document.getElementsByClassName("choice")[0];
    optionActiveItem.classList.remove("choice");
    this.classList.add("choice"); 

      
}

