var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '青岛绿地质量',
                interactive: true,
    title: '青岛绿地质量<br />\
    <img src="styles/legend/_0_0.png" /> 差<br />\
    <img src="styles/legend/_0_1.png" /> 优<br />\
    <img src="styles/legend/_0_2.png" /> 中<br />' });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '青岛市_立方数据学社',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> 青岛市_立方数据学社'
            });

lyr__0.setVisible(true);lyr___1.setVisible(true);
var layersList = [lyr__0,lyr___1];
lyr__0.set('fieldAliases', {'name': 'name', 'gb': 'gb', '25年青��': '25年青��', 'population': 'population', 'NDVI count': 'NDVI count', 'NDVI sum': 'NDVI sum', 'NDVI mean': 'NDVI mean', 'TreeCover': 'TreeCover', 'TreeCove_1': 'TreeCove_1', 'TreeCove_2': 'TreeCove_2', 'Green numb': 'Green numb', 'Class': 'Class', });
lyr___1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr__0.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', '25年青��': 'TextEdit', 'population': 'TextEdit', 'NDVI count': 'TextEdit', 'NDVI sum': 'TextEdit', 'NDVI mean': 'TextEdit', 'TreeCover': 'TextEdit', 'TreeCove_1': 'TextEdit', 'TreeCove_2': 'TextEdit', 'Green numb': 'TextEdit', 'Class': 'TextEdit', });
lyr___1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr__0.set('fieldLabels', {'name': 'inline label - always visible', 'gb': 'hidden field', '25年青��': 'hidden field', 'population': 'inline label - always visible', 'NDVI count': 'hidden field', 'NDVI sum': 'hidden field', 'NDVI mean': 'inline label - always visible', 'TreeCover': 'hidden field', 'TreeCove_1': 'hidden field', 'TreeCove_2': 'inline label - always visible', 'Green numb': 'inline label - always visible', 'Class': 'inline label - visible with data', });
lyr___1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr___1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});