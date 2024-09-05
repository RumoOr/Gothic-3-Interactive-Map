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
        crs: L.CRS.Simple,
        maxZoom: -4.5,
        minZoom: minimumZoom,
        zoomSnap: 0.5,
        zoomDelta: 0.5
    });

    mapColor.addTo(map);

    L.control.layers(baseMaps).addTo(map);

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
        /*   
        debug =  "" + coords[1] + "," + coords[0];
        
        if (debugLine == null) {
        	debugLine = L.polygon([e.latlng]).addTo(map);
        } else {
        	debugLine.addLatLng(e.latlng);
        }
        */
    });

    map.fitBounds(bounds);
    // map.setView(startOffset, startZoom);

    function createPopup(feature, layer) {
        if (feature.properties.label == true) {
            return;
        }
        var popup = L.popup({
            minWidth: feature.properties.screen ? 512 : 50,
            maxWidth: 512,
            maxHeight: 1024
        });
        var out = [];
        if (feature.properties.screen) {
            out.push('<img src="./resources/screens/' + feature.properties.screen + '"/>' + "<br />");
        }
        out.push('<b>' + feature.properties.name + (feature.properties.index > -1 && feature.properties.type !== "npc" ? " #" + (feature.properties.index + 1) : "") + '</b>');
        if (feature.properties.count > 1) {
            out.push('<center>' + 'x' + feature.properties.count + '</center>');
        }

        if (feature.properties.description) {
            out.push("<br />" + feature.properties.description);
        }
        layer.bindPopup(popup.setContent(out.join("<br />")));
    }

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
                markers.push(
                    {
                        "marker": marker,
                        "layer": typeId,
                        "name": name
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

    function withinBounds(rect, point) {
        return point[0] >= rect[0][1] && point[0] <= rect[1][1] && point[1] >= rect[0][0] && point[1] <= rect[1][0];
    }

    return {
        "map": map,
        "markers": markers,
        "layers": layers,
        "names": names
    };
}