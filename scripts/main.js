function checkboxValidation(language) {
  let checkboxes = Array.from(document.getElementsByName("dates[]"));
  checkboxes.forEach(
    checkbox =>
      (checkbox.onchange = () => {
        switch (checkboxes.filter(v => v.checked == true).length) {
          case 0:
            checkboxes.forEach(x => (x.required = true));
            break;
          case 1:
            checkboxes.forEach(x => (x.required = false));
            break;
          case 3:
            if (language == "es") {
              alert("Solo se pueden seleccionar dos fechas como máximo");
            } else {
              alert("Only two dates can be selected at most");
            }

            checkbox.checked = false;
            break;
        }
      })
  );
}