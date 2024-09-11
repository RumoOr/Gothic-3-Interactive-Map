function initSettings(id) {

  var container = document.getElementById(id);

  var div = document.createElement("div");
  div.className = "settings-entry";
  container.appendChild(div);

  var button = document.createElement("button");
  button.innerHTML = localization.settingsResetMap;
  button.addEventListener("click", function () {
    onSettingsResetMapClick();
  });
  div.appendChild(button);
}