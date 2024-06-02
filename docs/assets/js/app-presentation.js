import {initialize_mermiad} from "./init-mermaid.js"



// Activation de code highligh
hljs.highlightAll();

initialize_mermiad();
















// TODO js-2 : Création d'un script javascript qui permet d'afficher les figure par numéro 

// TODO js-2 : Création d'un script javascript qui permet d'afficher un tableau des figures



// var plantuml = require('plantuml-js');

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.plantuml');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var code = element.textContent;
    plantuml.render(code, function(svg) {
      element.innerHTML = svg;
    });
  }
});