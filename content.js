const VERION_NAME = '1.0.0'

const DISCOVERIES_STORAGE_KEY = 'discoveries'

const MARKER_OPACITY_DISCOVERED = 0.4;
const MARKER_OPACITY_UNDISCOVERED = 1.0;

var isMobileScreen = window.matchMedia('(max-width: 600px)') == true;

var myMenu, myMap, mySearch, mySettings,
    isMenuEnabled = true,
    searchLayer = null,
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
                        <img id="language-flag-en" class="topnav-flag" alt="en" src="./resources/flags/gb.svg"
                            onclick='onLanguageClick(this, "en")'>
                        <img id="language-flag-en" class="topnav-flag" alt="pl" src="./resources/flags/pl.svg"
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
                initScript(${pageIndex});
            </script>

            </body>

        </html>
    `;
}

function initScript(pageIndex) {
    document.getElementById("language-flag-de").classList.toggle("active");

    document.title = localization.websiteTitle;
    document.getElementById("header-search").innerHTML = localization.sidebarSearch;
    document.getElementById("header-menu").innerHTML = localization.sidebarMenu;
    document.getElementById("header-settings").innerHTML = localization.sidebarSettings;
    document.getElementById("tabWorldmap").innerHTML = localization.tabWorldmap;
    document.getElementById("tabAlShedim").innerHTML = localization.tabAlShedim;

    initDiscoveries();

    loadFromLocalStorage();

    let page = pageIndex == 0 ? "world" : "alshedim"

    myMenu = initMenu("menu", page);

    myMap = initMap(
        "map",
        [[-214000, -242500], [199000, 157000]],
        [0, 0],
        -9,
        -9.5,
        page,
        myMenu.filters);

    mySearch = initSearch("search", myMap.names);

    mySettings = initSettings("settings");

    if (isMobileScreen) {
        document.getElementById("mousePositionLabel").parentNode.style.visibility = "hidden";
    } else {
        document.getElementById("map").style.marginLeft = "330px";
    }

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

function onFilterToggleStateChange(id, checked) {
    var layer = myMap.layers[id];
    if (checked) {
        myMap.map.addLayer(layer);
    } else {
        myMap.map.removeLayer(layer);
    }
}

function onMenuButtonClick(cls) {
    cls.classList.toggle("change");

    isMenuEnabled = !isMenuEnabled;
    if (isMenuEnabled) {
        document.getElementById("sidebar").style.marginLeft = "0%";
        if (isMobileScreen) {
            document.getElementById("mousePositionLabel").parentNode.style.visibility = "hidden";
        } else {
            document.getElementById("map").style.marginLeft = "330px";
        }
    }
    else {
        document.getElementById("sidebar").style.marginLeft = "-100%";
        if (isMobileScreen) {
            document.getElementById("mousePositionLabel").parentNode.style.visibility = "visible";
        } else {
            document.getElementById("map").style.marginLeft = "0px";
        }
    }
}

function onSearch(name) {
    if (isMobileScreen) {
        document.getElementById("menu-icon").click();
    }

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

function onToggleDiscoveryItem(id) {
    var discoveryItem = discoveries.find(item => item.id === id);
    if (discoveryItem) {
        discoveryItem.value = !discoveryItem.value;

        saveToLocalStorage();

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

    var cbDiscovered = `
        <label>
            <input type="checkbox" ${isDiscovered(feature) ? 'checked' : ''} onchange="onToggleDiscoveryItem('${id}')">
        </label>
    `;

    if (feature.properties.screen) {
        out.push('<img src="./resources/screens/' + feature.properties.screen + '"/>' + "<br />");
    }
    out.push('<b>' + feature.properties.name + (feature.properties.index > -1 && feature.properties.type !== "npc" ? " #" + (feature.properties.index + 1) : "") + cbDiscovered + '</b>');

    if (feature.properties.count > 1) {
        out.push('<center>' + 'x' + feature.properties.count + '</center>');
    }
    if (feature.properties.description) {
        out.push("<br />" + feature.properties.description);
    }
    return out.join("<br />")
}

function featureUID(feature) {
    return feature.geometry.coordinates[0] + "_" + feature.geometry.coordinates[1]
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

function updateMarker(markerItem) {
    var marker = markerItem.marker
    if (marker.getPopup()) {
        marker.setPopupContent(createPopupContent(markerItem.feature));
        marker.setOpacity(isDiscovered(markerItem.feature) ? MARKER_OPACITY_DISCOVERED : MARKER_OPACITY_UNDISCOVERED);
    }
}

function saveToLocalStorage() {
    localStorage.setItem(DISCOVERIES_STORAGE_KEY, JSON.stringify(discoveries));
}

function loadFromLocalStorage() {
    var json = localStorage.getItem(DISCOVERIES_STORAGE_KEY);
    if (json) {
        discoveries = JSON.parse(json);
    }
}

function clearLocalStorage() {
    localStorage.clear();
}