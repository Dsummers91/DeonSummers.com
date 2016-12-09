(function() {
  'use strict'
  
  
  
  function init() {
    centerButtons();
    window.onresize = centerButtons;
    //window.setInterval(function() {changeTagLines();}, 7000);
  };

  function centerButtons() {
    let buttonContainer = document.getElementById('button-container');
    let buttonContainerSize = window.getComputedStyle(buttonContainer, null).width.replace('px', '');
    
    let body = document.getElementsByTagName('body')[0];
    let bodySize = window.getComputedStyle(body, null).width.replace('px', '');
    
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = ((bodySize - buttonContainerSize)/2);
  }
  
  function spanBackground() {
    document.getElementById('background').classList.add('transition-background');
  }
  init();
})();