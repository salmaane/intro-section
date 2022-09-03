"use strict";

let feature_drop = document.getElementById('features');
let company_drop = document.getElementById('company');

function dropMenu(dropdown) {
  if(dropdown.style.maxHeight !== "0px") {
    dropdown.style.maxHeight = "0";
  } else {
    dropdown.style.maxHeight = "10rem";
  }
}


let menu = document.getElementById('navigation');

function openMenu(){
  if(menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = '';
  }
}

