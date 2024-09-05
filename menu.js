function initMenu(id, mapName) {

    var i, j, groups,
        filterStates = {},
        container = document.getElementById(id);

    for (i = 0; i < jsonMenu.length; i += 1) {
        var filterCount = _.countBy(jsonMenu[i].items,
            function (item) {
                return item.map == "all" || item.map == mapName ? "valid" : "none";
            });
        if (filterCount.valid > 0) {
            addFilterGroup(container, jsonMenu[i], mapName);

            for (j = 0; j < jsonMenu[i].items.length; j += 1) {
                filterStates[jsonMenu[i].items[j].id] = jsonMenu[i].items[j].checked;
            }
        }
    }

    groups = document.getElementsByClassName("accordion");

    for (i = 0; i < groups.length; i++) {
        groups[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
        //groups[i].click();
    }
    groups[0].click();

    return {
        "filters": filterStates
    };
}

function addFilterGroup(parent, jsonFilter, mapName) {

    var i, row;

    var button = document.createElement("button");
    button.className = "accordion";
    button.innerHTML = jsonFilter.title;
    parent.appendChild(button);

    var icon = document.createElement("img");
    icon.className = "accordion-icon";
    icon.src = "./resources/icons/" + jsonFilter.icon + ".png";
    button.appendChild(icon);

    var div = document.createElement("div");
    div.className = "panel";
    parent.appendChild(div);

    var validFilters = _.filter(jsonFilter.items, 
        function (item) {
            return item.map == "all" || item.map == mapName;
        });

    for (i = 0; i < validFilters.length; i += 1) {
        if (i % 2 == 0) {
            row = addFilterRow(div);
        }
        addFilterItem(row, validFilters[i], jsonFilter);
    }
}

function addFilterRow(parent) {
    var table = document.createElement("table");
    table.style = "width:100%";
    parent.appendChild(table);

    var row = document.createElement("tr");
    row.className = "row";
    table.appendChild(row);

    return row;
}

function addFilterItem(parent, jsonItem, jsonFilter) {
    var td = document.createElement("td");
    parent.appendChild(td);

    var label = document.createElement("label");
    label.className = "filter-toggle";
    td.appendChild(label);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = jsonItem.id;
    checkbox.checked = jsonItem.checked;
    checkbox.addEventListener("click", function () {
        onFilterToggleStateChange(jsonItem.id, checkbox.checked);
    });
    label.appendChild(checkbox);

    var slider = document.createElement("div");
    slider.className = "filter-slider";
    label.appendChild(slider);

    var imgageLight = document.createElement("img");
    imgageLight.className = "filter-icon-light";
    imgageLight.src = "./resources/icons/ic_" + jsonItem.id + ".png";
    imgageLight.style.backgroundColor = jsonFilter.color;
    slider.appendChild(imgageLight);

    var imgageDark = document.createElement("img");
    imgageDark.className = "filter-icon-dark";
    imgageDark.src = "./resources/icons/ic_" + jsonItem.id + "_dark.png";
    slider.appendChild(imgageDark);

    var text = document.createElement("span");
    text.innerHTML = jsonItem.name;
    slider.appendChild(text);
}