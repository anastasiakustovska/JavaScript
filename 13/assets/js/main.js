"use strict"

//GOOGLE MAPS
var map;

const getInfoWindow = (imageUrl, description) => {
    return `
        <div>
            <img class="info__pic" src="${imageUrl}">
            <p class="info__description">${description}</p>
        </div>
    `;
};

const createInfoWindow = (imageUrl, description) => {
    return new google.maps.InfoWindow({
        content: getInfoWindow(imageUrl, description),
    })
};

function initMap() {
    const icons = {
        pin: {
            icon: "assets/img/pin.png",
            size: 16
        },
    };

    map = new google.maps.Map(
        document.getElementById('map'), {
            mapTypeId: 'satellite',
            scrollwheel: false,
            center: {
                lat: 48.92298291343789,
                lng: 24.71028018540592
            },
            zoom: 16,
            disableDefaultUI: true,
            styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ],
        }
    );

    const createMarker = (position, title, image, description) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title,
            icon: icons.pin.icon
        });

        const markerInfo = createInfoWindow(image, description);

        marker.addListener('click', () => {
            markerInfo.open({
                anchor: marker,
                map,
                shouldFocus: true,
                shouldCenter: true,
            });
        });

        const link = $(`
            <a href="javascript:void(0);" class="list-group-item list-group-item-action" data-title="${marker.title}">
                ${marker.title}
            </a>
        `);

        link.on('click', function () {
            map.setCenter(position);
        })

        $('#markers').append(link);
    }

    createMarker(
        {
            lat: 48.90516311133289,
            lng: 24.71359190976733
        },
        'Памʼятник Степану Бандері',
        'https://upload.wikimedia.org/wikipedia/uk/thumb/5/5e/%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D1%96_%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%96_%D0%B2_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D1%83.jpg/1200px-%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D1%96_%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%96_%D0%B2_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D1%83.jpg',
        'Stepan Bandera Description'
    );
    createMarker(
        {
            lat: 48.91125464265225,
            lng: 24.69488568461804
        },
        `Парк Шевченка`,
        'https://franyk.city/sites/default/files/styles/wide_background/public/images/news/2018/06/240380.jpg?itok=HnNDj836',
        'Park description'
    );
    createMarker(
        {
            lat: 48.924732763512445,
            lng: 24.712923004266706
        },
        `Палац Потоцьких`,
        'http://firtka.if.ua/data/blog/224163/a543c10cb6b7a67f2a9d4775ddbe7287.jpeg',
        'Palace description',
    )
    createMarker(
        {
            lat: 48.922303552774736,
            lng: 24.707614481055614
        },
        `Бастіон`,
        'https://static3.karpaty.info/data/objects/img/3308/out3.jpg',
        'Bastion Description',

    )
    createMarker(
        {
            lat: 48.923070508769605,
            lng: 24.710453574895578
        },
        `Ратуша`,
        'http://itinery.com.ua/img/folder_2/1994/36400_800x600_Ratusha_(Ivano-Frankivsyk).jpg',
        'Ratusha Description',
    )
}


initMap()