const VERION_NAME = '1.2.0'

const LAYER_INDEX_STORAGE_KEY = 'layer_index'
const FILTERS_STORAGE_KEY = 'filters'
const DISCOVERIES_STORAGE_KEY = 'discoveries'
const CHECKLIST_FILTERS_STORAGE_KEY = 'checklist_filters'
const CLICKED_CHECKLIST_ITEM_STORAGE_KEY = 'clicked_checklist_item'

const MARKER_OPACITY_DISCOVERED = 0.4;
const MARKER_OPACITY_UNDISCOVERED = 1.0;

const PAGE_INDEX_WORLD = 0;
const PAGE_INDEX_AL_SHEDIM = 1;
const PAGE_INDEX_CHECKLIST = 2;

const isMobileScreen = window.innerWidth <= 600;

var myMenu, myMap, mySearch, mySettings,
    isMenuEnabled = true,
    searchLayer = null,
    layerIndex = 0,
    filters = [],
    discoveries = [],
    checklistFilters = [],
    clickedChecklistItem = null,
    debug = "",
    debugLine = null;

function createHTML(code, pageIndex) {
    let pageSuffix = code == "de" ? "" : "_" + code

    return `
        <!DOCTYPE html>
        <html lang="${code}">

        <head>
            <meta charset="UTF-8">
        </head>
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css" />
            <link rel="stylesheet" href="./leaflet/leaflet.css" />
            <script src="./leaflet/leaflet.js"></script>
            <script src="./leaflet/plugins/Leaflet.Control.Custom.js"></script>
            <script src="./underscore-min.js"></script>
            <script src="./menu.js"></script>
            <script src="./map.js"></script>
            <script src="./search.js"></script>
            <script src="./settings.js"></script>
            <script src="./checklist.js"></script>
            <script src="./data/data_${code}.js"></script>
        </head>

        <body>
            <!-- Navigation -->
            <nav>
                <ul class="topnav">
                    <li id="menu-icon" onclick="onMenuButtonClick(this)">
                        <div class="topnav-menu">
                            <div class="topnav-menu-bar1"></div>
                            <div class="topnav-menu-bar2"></div>
                            <div class="topnav-menu-bar3"></div>
                        </div>
                    </li>
                    <li><h2><a id="tabWorldmap" ${pageIndex == PAGE_INDEX_WORLD ? 'class="active"' : ""} href="index${pageSuffix}.html"></a></h2></li>
                    <li><h2><a id="tabAlShedim" ${pageIndex == PAGE_INDEX_AL_SHEDIM ? 'class="active"' : ""} href="alshedim${pageSuffix}.html"></a></h2></li>
                    <li><h2><a id="tabChecklist" ${pageIndex == PAGE_INDEX_CHECKLIST ? 'class="active"' : ""} href="checklist${pageSuffix}.html"></a></h2></li>
                    <div class="right">
                        <img id="language-flag-de" class="topnav-flag" alt="de" src="./resources/flags/de.svg"
                            onclick='onLanguageClick(this, "de")'>
                        <img id="language-flag-en" class="topnav-flag" alt="en" src="./resources/flags/en.svg"
                            onclick='onLanguageClick(this, "en")'>
                        <img id="language-flag-pl" class="topnav-flag" alt="pl" src="./resources/flags/pl.svg"
                            onclick='onLanguageClick(this, "pl")'>
                        <img id="language-flag-ru" class="topnav-flag-last" alt="ru" src="./resources/flags/ru.svg"
                            onclick='onLanguageClick(this, "ru")'>
                    </div>
                </ul>
            </nav>

            ${pageIndex == PAGE_INDEX_CHECKLIST ? createChecklistHTML() : createMapHTML()}
            
            <script>
                initScript(${pageIndex}, "${code}");
            </script>

            </body>

        </html>
    `;
}

function createMapHTML() {
    return `
        <!-- Map -->
        <main class="map-container">
            <div id="map"></div>
        </main>

        <!-- Menu -->
        <aside id="sidebar" class="left-sidebar">
            <!-- Search -->
            <h2 id="header-search" class="sidebar-header"></h2>
            <div id="search"></div>
            <!-- Filter -->
            <h2 id="header-menu" class="sidebar-header"></h2>
            <div id="menu"></div>
            <!-- Settings -->
            <h2 id="header-settings" class="sidebar-header"></h2>
            <div id="settings"></div>
        </aside>
    `;
}

function createChecklistHTML() {
    return `
        <!-- Checklist -->
        <div id="checklist" class="checklist-container"></div>
    `;
}

function initScript(pageIndex, code) {
    document.getElementById(`language-flag-${code}`).classList.toggle("active");

    document.title = localization.websiteTitle;
    document.getElementById("tabWorldmap").innerHTML = localization.tabWorldmap;
    document.getElementById("tabAlShedim").innerHTML = localization.tabAlShedim;
    document.getElementById("tabChecklist").innerHTML = localization.tabChecklist;

    initFilters();

    initDiscoveries();

    initChecklistFilters();

    loadFromLocalStorage();

    if (pageIndex == PAGE_INDEX_CHECKLIST) {
        _initChecklist();
    } else {
        _initMap(document, pageIndex);

        if (pageIndex == PAGE_INDEX_WORLD) {
            validateClickedChecklistItem();
        }
    }
}

function _initMap(document, pageIndex) {
    let page = pageIndex == PAGE_INDEX_WORLD ? "world" : "alshedim"
    let bounds = pageIndex == PAGE_INDEX_WORLD ? [[-214000, -242500], [199000, 157000]] : [[-178000, -62000], [-138000, -22000]]
    let minimumZoom = pageIndex == PAGE_INDEX_WORLD ? -9.5 : -6

    document.getElementById("header-search").innerHTML = localization.sidebarSearch;
    document.getElementById("header-menu").innerHTML = localization.sidebarMenu;
    document.getElementById("header-settings").innerHTML = localization.sidebarSettings;

    myMenu = initMenu(
        "menu",
        page,
        filters
    );

    myMap = initMap(
        "map",
        bounds,
        minimumZoom,
        page,
        myMenu.filters,
        layerIndex
    );

    mySearch = initSearch(
        "search",
        myMap.markers
    );

    mySettings = initSettings("settings");

    document.getElementById("mousePositionLabel").parentNode.style.visibility = isMobileScreen ? "hidden" : "visible";

    document.getElementById("menu-icon").classList.toggle("change");
}

function _initChecklist() {
    initChecklist(
        "checklist",
        checklistFilters
    );

    document.getElementById("menu-icon").style.visibility = "hidden";
    //document.getElementById("menu-icon").remove();
}

function onLanguageClick(id, code) {
    if (code == "de") {
        document.location.href = "index.html";
    } else if (code == "ru") {
        document.location.href = "index_ru.html";
    } else if (code == "pl") {
        document.location.href = "index_pl.html";
    } else {
        document.location.href = "index_en.html";
    }
}

function onLayerIndexChange(index) {
    layerIndex = index;

    saveLayerIndexToLocalStorage();
}

function onFilterGroupCheckedChange(filterGroup, checked) {
    var goupId = filterGroup.icon;

    setFilterGroupChecked(goupId, checked);

    saveFiltersToLocalStorage();
}

function onFilterItemCheckedChange(item, filterGroup, checked) {
    var goupId = filterGroup.icon,
        itemId = item.id,
        layer = myMap.layers[itemId];

    setFilterItemChecked(goupId, itemId, checked);

    saveFiltersToLocalStorage();

    if (checked) {
        myMap.map.addLayer(layer);
    } else {
        myMap.map.removeLayer(layer);
    }
}

function onMenuButtonClick(cls) {
    cls.classList.toggle("change");

    isMenuEnabled = !isMenuEnabled;

    document.getElementById("sidebar").style.left = isMenuEnabled ? "0px" : "-350px";
}

function onSearch(name) {
    if (isMobileScreen) {
        document.getElementById("menu-icon").click();
    }

    setTimeout(function () {
        gotoMarker(name);
    }, isMobileScreen ? 400 : 100);
}

function onChecklistItemClick(feature) {
    saveClickedChecklistItemToLocalStorage(feature);

    document.getElementById("tabWorldmap").click();
}

function onToggleDiscoveryItem(id) {
    var discoveryItem = discoveries.find(item => item.id === id);
    if (discoveryItem) {
        discoveryItem.value = !discoveryItem.value;

        saveDiscoveriesToLocalStorage();

        var markerItem = myMap.markers.find(item => item.id === id)
        if (markerItem) {
            updateMarker(markerItem)
        }
    }
}

function onToggleChecklistFilter(type) {
    var filter = checklistFilters.find(item => item.id === type);
    if (filter) {
        filter.value = !filter.value;
    }
    saveChecklistFiltersToLocalStorage();
}

function onSettingsResetMapClick() {
    clearLocalStorage();
    location.reload();
}

function onDebugClick() {
    if (debugLine) {
        debugLine.remove();
        debugLine = null;
    }
}

function createPopupContent(feature) {
    var out = [],
        id = featureUID(feature);

    if (feature.properties.screen) {
        out.push('<img class="popup-screenshot" src="./resources/screens/' + feature.properties.screen + '"/>');
    }

    var cb = `<input type="checkbox" class="popup-checkbox" ${isDiscovered(feature) ? 'checked' : ''} onchange="onToggleDiscoveryItem('${id}')"/>`;

    out.push('<div class="popup-header">' + '<b class="popup-title">' + featureTitle(feature) + "</b>" + cb + "</div>");

    if (feature.properties.count > 1) {
        out.push('<center>' + 'x' + feature.properties.count + '</center>');
    }
    if (feature.properties.description) {
        out.push('<div class="popup-description">' + feature.properties.description + "</div>");
    }
    return out.join("<br/>")
}

function featureUID(feature) {
    return feature.geometry.coordinates[0] + "_" + feature.geometry.coordinates[1]
}

function getFeatureTypeID(feature) {
    return feature.properties.type + (feature.properties.type != "teleporter" ? "_" + parseInt(feature.properties.tag) : "");
}

function featureTitle(feature) {
    return feature.properties.name + (feature.properties.index > -1 && feature.properties.type !== "npc" ? " #" + (feature.properties.index + 1) : "")
}

function getGroupedFeatures() {
    var groupedFeatures = {},
        features = [],
        type;

    jsonMenu.forEach(menu => {
        menu.items.forEach(menuItem => {
            if (menuItem.id != "location") {
                features = jsonData.filter(feature => menuItem.id == getFeatureTypeID(feature));
                features.forEach(feature => {
                    type = getFeatureTypeID(feature);

                    if (!groupedFeatures[type]) {
                        groupedFeatures[type] = [];
                    }
                    groupedFeatures[type].push(
                        {
                            "feature": feature,
                            "group": menuItem.name,
                            "color": menu.color
                        }
                    );
                });
            }
        });
    });
    return groupedFeatures;
}

function initFilters() {
    var menuGroup,
        filterGroup;

    for (i = 0; i < jsonMenu.length; i += 1) {
        menuGroup = jsonMenu[i].items;
        filterGroup = [];

        for (j = 0; j < menuGroup.length; j += 1) {
            filterGroup.push(
                {
                    "id": menuGroup[j].id,
                    "value": menuGroup[j].checked
                }
            );
        }
        filters.push(
            {
                "id": jsonMenu[i].icon,
                "value": i == 0,
                "items": filterGroup
            }
        );
    }
}

function initDiscoveries() {
    for (i = 0; i < jsonData.length; i += 1) {
        discoveries.push(
            {
                "id": featureUID(jsonData[i]),
                "value": false
            }
        );
    }
}

function initChecklistFilters() {
    var i = 0, groupedFeatures = getGroupedFeatures();

    for (var [type, items] of Object.entries(groupedFeatures)) {
        checklistFilters.push(
            {
                "id": type,
                "value": i == 0
            }
        );
        i++;
    }
}

function validateClickedChecklistItem() {
    if (clickedChecklistItem) {
        var name = featureTitle(clickedChecklistItem);

        onSearch(name);

        clearClickedChecklistItemFromLocalStorage();
    }
}

function isDiscovered(feature) {
    var id = featureUID(feature),
        discoveryItem = discoveries.find(item => item.id === id);

    return discoveryItem ? discoveryItem.value : false;
}

function isFilterGroupChecked(groupId) {
    var filterGroup = filters.find(item => item.id === groupId);

    return filterGroup ? filterGroup.value : false;
}

function isFilterItemChecked(groupId, itemId) {
    var filterItem,
        filterGroup = filters.find(item => item.id === groupId);

    if (filterGroup) {
        filterItem = filterGroup.items.find(item => item.id === itemId);
    }

    return filterItem ? filterItem.value : false;
}

function setFilterGroupChecked(groupId, checked) {
    var filterGroup = filters.find(item => item.id === groupId);

    if (filterGroup) {
        filterGroup.value = checked;
    }
}

function setFilterItemChecked(groupId, itemId, checked) {
    var filterItem,
        filterGroup = filters.find(item => item.id === groupId);

    if (filterGroup) {
        filterItem = filterGroup.items.find(item => item.id === itemId);

        if (filterItem) {
            filterItem.value = checked;
        }
    }
}

function updateMarker(markerItem, closePopup = true) {
    var marker = markerItem.marker

    if (closePopup) {
        myMap.map.closePopup();
    }

    if (marker.getPopup()) {
        marker.setPopupContent(createPopupContent(markerItem.feature));
        marker.setOpacity(isDiscovered(markerItem.feature) ? MARKER_OPACITY_DISCOVERED : MARKER_OPACITY_UNDISCOVERED);
    }
}

function gotoMarker(name) {
    var marker = _.findWhere(myMap.markers, { name: name });

    if (!marker) { return; }

    if (!myMap.map.hasLayer(myMap.layers[marker.layer])) {
        if (searchLayer !== null && myMap.map.hasLayer(searchLayer)) {
            myMap.map.removeLayer(searchLayer);
        }
        searchLayer = L.layerGroup([marker.marker]);
        myMap.map.addLayer(searchLayer);
    }
    myMap.map.flyTo(marker.marker.getLatLng());
    marker.marker.openPopup();
}

function saveLayerIndexToLocalStorage() {
    localStorage.setItem(LAYER_INDEX_STORAGE_KEY, layerIndex.toString());
}

function saveFiltersToLocalStorage() {
    localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
}

function saveDiscoveriesToLocalStorage() {
    localStorage.setItem(DISCOVERIES_STORAGE_KEY, JSON.stringify(discoveries));
}

function saveChecklistFiltersToLocalStorage() {
    localStorage.setItem(CHECKLIST_FILTERS_STORAGE_KEY, JSON.stringify(checklistFilters));
}

function saveClickedChecklistItemToLocalStorage(feature) {
    localStorage.setItem(CLICKED_CHECKLIST_ITEM_STORAGE_KEY, JSON.stringify(feature));
}

function loadFromLocalStorage() {
    var jsonLayerIndex = localStorage.getItem(LAYER_INDEX_STORAGE_KEY),
        jsonFilters = localStorage.getItem(FILTERS_STORAGE_KEY),
        jsonDiscoveries = localStorage.getItem(DISCOVERIES_STORAGE_KEY),
        jsonChecklistFilters = localStorage.getItem(CHECKLIST_FILTERS_STORAGE_KEY),
        jsonClickedChecklistItem = localStorage.getItem(CLICKED_CHECKLIST_ITEM_STORAGE_KEY);

    if (jsonLayerIndex) {
        layerIndex = parseInt(jsonLayerIndex)
    }
    if (jsonFilters) {
        filters = JSON.parse(jsonFilters);
    }
    if (jsonDiscoveries) {
        discoveries = JSON.parse(jsonDiscoveries);
    }
    if (jsonChecklistFilters) {
        checklistFilters = JSON.parse(jsonChecklistFilters);
    }
    if (jsonClickedChecklistItem) {
        clickedChecklistItem = JSON.parse(jsonClickedChecklistItem);
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

function clearClickedChecklistItemFromLocalStorage() {
    localStorage.removeItem(CLICKED_CHECKLIST_ITEM_STORAGE_KEY);
}