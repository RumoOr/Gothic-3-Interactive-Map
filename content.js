const VERION_NAME = '1.0.0'

const LAYER_INDEX_STORAGE_KEY = 'layer_index'
const FILTERS_STORAGE_KEY = 'filters'
const DISCOVERIES_STORAGE_KEY = 'discoveries'

const MARKER_OPACITY_DISCOVERED = 0.4;
const MARKER_OPACITY_UNDISCOVERED = 1.0;

const isMobileScreen = window.innerWidth <= 600;

var myMenu, myMap, mySearch, mySettings,
    isMenuEnabled = true,
    searchLayer = null,
    layerIndex = 0,
    filters = [],
    discoveries = [],
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
                    <li><a id="tabWorldmap" ${pageIndex == 0 ? 'class="active"' : ""} href="index${pageSuffix}.html"></a></li>
                    <li><a id="tabAlShedim" ${pageIndex == 1 ? 'class="active"' : ""} href="alshedim${pageSuffix}.html"></a></li>
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

            <!-- Map -->
            <main class="map-container">
                <div id="map"></div>
            </main>

            <!-- Menu -->
            <aside id="sidebar" class="left-sidebar">
                <!-- Spacer -->
                <div class="sidebar-spacer"></div>
                <!-- Search -->
                <p id="header-search" class="sidebar-header"></p>
                <div id="search"></div>
                <!-- Filter -->
                <p id="header-menu" class="sidebar-header"></p>
                <div id="menu"></div>
                <!-- Settings -->
                <p id="header-settings" class="sidebar-header"></p>
                <div id="settings"></div>
            </aside>
            
            <script>
                initScript(${pageIndex}, "${code}");
            </script>

            </body>

        </html>
    `;
}

function initScript(pageIndex, code) {
    document.getElementById(`language-flag-${code}`).classList.toggle("active");

    document.title = localization.websiteTitle;
    document.getElementById("header-search").innerHTML = localization.sidebarSearch;
    document.getElementById("header-menu").innerHTML = localization.sidebarMenu;
    document.getElementById("header-settings").innerHTML = localization.sidebarSettings;
    document.getElementById("tabWorldmap").innerHTML = localization.tabWorldmap;
    document.getElementById("tabAlShedim").innerHTML = localization.tabAlShedim;

    initFilters();

    initDiscoveries();

    loadFromLocalStorage();

    let page = pageIndex == 0 ? "world" : "alshedim"
    let bounds = pageIndex == 0 ? [[-214000, -242500], [199000, 157000]] : [[-178000, -62000], [-138000, -22000]]
    let minimumZoom = pageIndex == 0 ? -9.5 : -6

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

function featureTitle(feature) {
    return feature.properties.name + (feature.properties.index > -1 && feature.properties.type !== "npc" ? " #" + (feature.properties.index + 1) : "")
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

function loadFromLocalStorage() {
    var jsonLayerIndex = localStorage.getItem(LAYER_INDEX_STORAGE_KEY),
        jsonFilters = localStorage.getItem(FILTERS_STORAGE_KEY),
        jsonDiscoveries = localStorage.getItem(DISCOVERIES_STORAGE_KEY);

    if (jsonLayerIndex) {
        layerIndex = parseInt(jsonLayerIndex)
    }
    if (jsonFilters) {
        filters = JSON.parse(jsonFilters);
    }
    if (jsonDiscoveries) {
        discoveries = JSON.parse(jsonDiscoveries);
    }
}

function clearLocalStorage() {
    localStorage.clear();
}