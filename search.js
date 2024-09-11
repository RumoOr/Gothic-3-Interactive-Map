function initSearch(id, markers) {

  var container = document.getElementById(id);

  var form = document.createElement("form");
  form.autocomplete = "off";
  form.action = "/action_page.php";
  container.appendChild(form);

  var div = document.createElement("div");
  div.className = "autocomplete";
  form.appendChild(div);

  var input = document.createElement("input");
  input.id = "myInput";
  input.type = "search";
  input.name = "myMarker";
  input.placeholder = localization.searchHint;
  div.appendChild(input);

  autocomplete(input, markers);
}

function autocomplete(input, markers) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  input.addEventListener("input", function (e) {
    var a, b, i, name, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();

    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < markers.length; i++) {
      name = markers[i].name;
      /*check if the item starts with the same letters as the text field value:*/
      // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
      if (name.toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        // b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        // b.innerHTML += arr[i].substr(val.length);
        b.innerHTML = name.substr(0, name.toUpperCase().indexOf(val.toUpperCase()));
        b.innerHTML += "<strong>" + name.substr(name.toUpperCase().indexOf(val.toUpperCase()), val.length) + "</strong>";
        b.innerHTML += name.substr(name.toUpperCase().indexOf(val.toUpperCase()) + val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + name + "'>";

        cb = document.createElement("input");
        cb.type = "checkbox";
        cb.className = "autocomplete-checkbox";
        cb.checked = isDiscovered(markers[i].feature);
        cb.disabled = true;
        b.appendChild(cb);

        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          input.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
          // fire callback event
          onSearch(input.value);
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  input.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}