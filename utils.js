const DISCOVERIES_STORAGE_KEY = 'discoveries'

function addScript(filename, onScriptLoaded) {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = onScriptLoaded;
    script.async = true;

    head.append(script);
}

function setClipboardText(text) {
    var id = "mycustom-clipboard-textarea-hidden-id";
    var existsTextarea = document.getElementById(id);

    if (!existsTextarea) {
        console.log("Creating textarea");
        var textarea = document.createElement("textarea");
        textarea.id = id;
        // Place in top-left corner of screen regardless of scroll position.
        textarea.style.position = 'fixed';
        textarea.style.top = 0;
        textarea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textarea.style.width = '1px';
        textarea.style.height = '1px';

        // We don't need padding, reducing the size if it does flash render.
        textarea.style.padding = 0;

        // Clean up any borders.
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';

        // Avoid flash of white box if rendered for any reason.
        textarea.style.background = 'transparent';
        document.querySelector("body").appendChild(textarea);
        console.log("The textarea now exists :)");
        existsTextarea = document.getElementById(id);
    } else {
        console.log("The textarea already exists :3")
    }

    existsTextarea.value = text;
    existsTextarea.select();

    try {
        var status = document.execCommand('copy');
        if (!status) {
            console.error("Cannot copy text");
        } else {
            console.log("The text is now on the clipboard");
        }
    } catch (err) {
        console.log('Unable to copy.');
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