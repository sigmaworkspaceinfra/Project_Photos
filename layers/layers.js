var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_HydraulicModelStudy_1 = new ol.format.GeoJSON();
var features_HydraulicModelStudy_1 = format_HydraulicModelStudy_1.readFeatures(json_HydraulicModelStudy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HydraulicModelStudy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydraulicModelStudy_1.addFeatures(features_HydraulicModelStudy_1);
var lyr_HydraulicModelStudy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydraulicModelStudy_1, 
                style: style_HydraulicModelStudy_1,
                popuplayertitle: "Hydraulic Model Study",
                interactive: true,
                title: '<img src="styles/legend/HydraulicModelStudy_1.png" /> Hydraulic Model Study'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_HydraulicModelStudy_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_HydraulicModelStudy_1];
lyr_HydraulicModelStudy_1.set('fieldAliases', {'Name': 'Name', 'Descri.': 'Descri.', 'Photos': 'Photos', });
lyr_HydraulicModelStudy_1.set('fieldImages', {'Name': 'TextEdit', 'Descri.': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_HydraulicModelStudy_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Descri.': 'inline label - visible with data', 'Photos': 'inline label - visible with data', });
lyr_HydraulicModelStudy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});