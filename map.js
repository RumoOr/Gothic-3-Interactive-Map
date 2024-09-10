function initMap(id, bounds, startOffset, startZoom, minimumZoom, mapName, filters) {

    var mapColor = L.imageOverlay('resources/map_' + mapName + '_color.jpg', bounds),
        mapGrayscale = L.imageOverlay('resources/map_' + mapName + '_grayscale.jpg', bounds),
        mapSepia = L.imageOverlay('resources/map_' + mapName + '_sepia.jpg', bounds);

    var baseMaps = {};
    baseMaps[localization.mapLayerColor] = mapColor;
    baseMaps[localization.mapLayerSepia] = mapSepia;
    baseMaps[localization.mapLayerGrayscale] = mapGrayscale;

    var FeatureIcon = L.Icon.extend({
        options: {
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -10]
        }
    });

    var FeatureLabel = L.DivIcon.extend({
        options: {
            className: 'feature-label',
        },
        initialize: function (name, options) {
            this.name = name;
            L.setOptions(this, options);
            this.options.html = '<span>' + this.name + '</span>';
        }
    });

    L.icon = function (options) {
        return new L.Icon(options);
    };

    var map = L.map(id, {
        zoomControl: false,
        crs: L.CRS.Simple,
        maxZoom: -4.5,
        minZoom: minimumZoom,
        zoomSnap: 0.5,
        zoomDelta: 0.5
    });

    mapColor.addTo(map);

    L.control.layers(
        baseMaps
    ).addTo(map);

    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    L.control.custom({
        content: '<div id="mousePositionLabel">' +
            '0 0' +
            '</div>',
        classes: '',
        style: {
            position: 'fixed',
            left: '50%',
            bottom: '5px',
            transform: 'translate(-50%, -50%)',
            margin: '0 auto',
            color: 'white',
            background: 'hsla(0, 100%, 0%, 0.6)',
            borderRadius: '5px',
            width: '150px',
            padding: '5px',
            textAlign: 'center',
        }
    }).addTo(map);

    L.control.custom({
        content: '<div onclick="onDebugClick()">' +
            'Debug' +
            '</div>',
        classes: '',
        style: {
            float: 'right',
            position: 'fixed',
            right: '20px',
            bottom: '5px',
            transform: 'translate(0%, -50%)',
            margin: '0 auto',
            color: '#111',
            background: '#eee',
            borderRadius: '5px',
            boxShadow: '#111 0 0 1px',
            width: 'auto',
            padding: '5px 15px',
            textAlign: 'center',
            display: 'none'
        }
    }).addTo(map);

    map.on('mousemove', function (e) {
        var coords = [parseInt(e.latlng.lat), parseInt(e.latlng.lng)];
        document.getElementById('mousePositionLabel').innerHTML =
            "" + coords[1] + " " + coords[0];
    });

    map.fitBounds(bounds);
    // map.setView(startOffset, startZoom);

    var markers = [], layers = {}, names = [];

    var keys = _.keys(_.countBy(jsonData,
        function (element) {
            return element.properties.type + (element.properties.tag ? "_" + element.properties.tag : "");
        }));

    keys.forEach(element => {
        layers[element] = L.geoJSON(jsonData, {
            pointToLayer: function (feature, latlng) {
                var typeId = feature.properties.type + (feature.properties.tag ? "_" + feature.properties.tag : "");
                var name = feature.properties.name + (feature.properties.index > -1 && feature.properties.type !== "npc" ? " #" + (feature.properties.index + 1) : "");
                var marker = L.marker(latlng, {
                    icon: feature.properties.label == true ?
                        new FeatureLabel(feature.properties.name) :
                        new FeatureIcon({ iconUrl: 'resources/icons/ic_marker_' + typeId + '.png' })
                });
                marker.setOpacity(isDiscovered(feature) ? MARKER_OPACITY_DISCOVERED : MARKER_OPACITY_UNDISCOVERED);
                markers.push(
                    {
                        "id": featureUID(feature),
                        "marker": marker,
                        "layer": typeId,
                        "name": name,
                        "feature": feature
                    });
                names.push(name);
                return marker;
            },
            onEachFeature: createPopup,
            filter: function (feature, layer) {
                return (feature.properties.map == null || feature.properties.map == mapName) &&
                    withinBounds(bounds, feature.geometry.coordinates) &&
                    feature.properties.type + (feature.properties.tag ? "_" + feature.properties.tag : "") === element;
            }
        });

        if (filters[element] == true) {
            map.addLayer(layers[element]);
        }
    });

    createVersionInfo(map);

    return {
        "map": map,
        "markers": markers,
        "layers": layers,
        "names": names
    };
}

function createPopup(feature, layer) {
    if (feature.properties.label == true) {
        return;
    }

    var maxSize = 512,
        maxWidthScreen = Math.min(window.innerWidth - 50, maxSize),
        popup = L.popup({
            minWidth: feature.properties.screen ? maxWidthScreen : 50,
            maxWidth: maxWidthScreen,
            maxHeight: maxSize
        });

    layer.bindPopup(popup.setContent(createPopupContent(feature)));
}

function createVersionInfo(map) {
    var versionInfo = L.control({ position: 'bottomright' });
    versionInfo.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'version-info');
        this._div.innerHTML = `v${VERION_NAME}`;
        return this._div;
    };
    versionInfo.addTo(map);
}

function withinBounds(rect, point) {
    return point[0] >= rect[0][1] && point[0] <= rect[1][1] && point[1] >= rect[0][0] && point[1] <= rect[1][0];
}