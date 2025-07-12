'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  if(document.body.classList.contains('light-theme')) {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
});
