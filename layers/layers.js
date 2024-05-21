var wms_layers = [];

var format_TAMILNADU_SUBDISTRICTS_0 = new ol.format.GeoJSON();
var features_TAMILNADU_SUBDISTRICTS_0 = format_TAMILNADU_SUBDISTRICTS_0.readFeatures(json_TAMILNADU_SUBDISTRICTS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMILNADU_SUBDISTRICTS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMILNADU_SUBDISTRICTS_0.addFeatures(features_TAMILNADU_SUBDISTRICTS_0);
var lyr_TAMILNADU_SUBDISTRICTS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMILNADU_SUBDISTRICTS_0, 
                style: style_TAMILNADU_SUBDISTRICTS_0,
                popuplayertitle: "TAMILNADU_SUBDISTRICTS",
                interactive: true,
                    title: '<img src="styles/legend/TAMILNADU_SUBDISTRICTS_0.png" /> TAMILNADU_SUBDISTRICTS'
                });
var group_TN_sdt_1 = new ol.layer.Group({
                                layers: [lyr_TAMILNADU_SUBDISTRICTS_0,],
                                fold: "open",
                                title: "TN_sdt_1"});

lyr_TAMILNADU_SUBDISTRICTS_0.setVisible(true);
var layersList = [group_TN_sdt_1];
lyr_TAMILNADU_SUBDISTRICTS_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_TAMILNADU_SUBDISTRICTS_0.set('fieldImages', {'OBJECTID': 'Range', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'sdtcode11': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'stname': 'TextEdit', 'dtname': 'TextEdit', 'sdtname': 'TextEdit', 'Subdt_LGD': 'Range', 'Dist_LGD': 'Range', 'State_LGD': 'Range', });
lyr_TAMILNADU_SUBDISTRICTS_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'stcode11': 'hidden field', 'dtcode11': 'hidden field', 'sdtcode11': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'stname': 'header label - visible with data', 'dtname': 'header label - always visible', 'sdtname': 'header label - always visible', 'Subdt_LGD': 'hidden field', 'Dist_LGD': 'hidden field', 'State_LGD': 'hidden field', });
lyr_TAMILNADU_SUBDISTRICTS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});