$(document).ready(function () {
  $("input[type='radio']").on("change", function () {
    var elemento01 = document.getElementsByClassName("questionnaire1");
    var questionnaire = '';

    check(elemento01, questionnaire);
  });

  function check(elemento, questionnaire) {
    clear_alter(elemento);
    check_replicated(elemento, questionnaire);
  }

  function clear_alter(elemento) {
    for (i = 0; i < elemento.length; i++) {
      if (elemento[i].parentElement.className.includes("mystyle")) {
        elemento[i].parentElement.className = elemento[i].parentElement.className.replace(/mystyle/g, '');
      }
    }
  }

  function check_replicated(elemento, questionnaire) {
    for (i = 0; i < elemento.length; i++) {
      if (elemento[i].checked) {
        if (questionnaire.includes(elemento[i].value)) {
          elemento[i].parentElement.className += " mystyle";
        }
        questionnaire += elemento[i].value + ",";
      }
    }
  }
});