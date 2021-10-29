/* ------------- START yandex map-------------*/

ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [43.421215272213736,39.91839597616569],
        zoom: 16,
        controls: []
    });

    let myPlacemark = new ymaps.Placemark([43.420331574547774,39.92167899999993], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../files/img/map-location-img.svg',
      iconImageSize: [48, 48],
      iconImageOffset: [-24, -48]
    });

    
    myMap.geoObjects.add(myPlacemark)
    
}

/* ------------- END yandex map-------------*/