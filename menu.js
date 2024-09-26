function initMenu(id, mapName, filters) {
    var i, j,
        groupId,
        itemId,
        filterGroupStates = {},
        filterStates = {},
        container = document.getElementById(id);

    for (i = 0; i < jsonMenu.length; i += 1) {
        var filterCount = _.countBy(jsonMenu[i].items,
            function (item) {
                return item.map == "all" || item.map == mapName ? "valid" : "none";
            });
        if (filterCount.valid > 0) {
            for (j = 0; j < jsonMenu[i].items.length; j += 1) {
                groupId = jsonMenu[i].icon;
                itemId = jsonMenu[i].items[j].id;

                filterStates[itemId] = isFilterItemChecked(groupId, itemId);
            }
            filterGroupStates[groupId] = isFilterGroupChecked(groupId);

            addFilterGroup(container, jsonMenu[i], mapName, filterGroupStates, filterStates);
        }
    }

    return {
        "filters": filterStates
    };
}

function addFilterGroup(parent, jsonFilter, mapName, filterGroupStates, filterStates) {
    var i,
        groupId = jsonFilter.icon,
        jsonItem,
        row;

    var button = document.createElement("h3");
    button.className = "accordion";
    button.innerHTML = jsonFilter.title;
    button.addEventListener("click", function () {
        toggleFilterGroup(button);

        filterGroupStates[groupId] = !filterGroupStates[groupId]

        onFilterGroupCheckedChange(jsonFilter, filterGroupStates[groupId]);
    });
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
        }
    );

    for (i = 0; i < validFilters.length; i += 1) {
        jsonItem = validFilters[i];

        if (i % 2 == 0) {
            row = addFilterRow(div);
        }

        addFilterItem(row, jsonItem, jsonFilter, filterStates[jsonItem.id]);
    }

    if (filterGroupStates[groupId]) {
        toggleFilterGroup(button);
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

function addFilterItem(parent, jsonItem, jsonFilter, checked) {
    var td = document.createElement("td");
    parent.appendChild(td);

    var label = document.createElement("label");
    label.className = "filter-toggle";
    td.appendChild(label);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "filter-checkbox";
    checkbox.id = jsonItem.id;
    checkbox.checked = checked;
    checkbox.addEventListener("click", function () {
        onFilterItemCheckedChange(jsonItem, jsonFilter, checkbox.checked);
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

function toggleFilterGroup(button) {
    button.classList.toggle("active");

    var panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}