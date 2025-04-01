async function initMap() {
    var options = {
        zoom: 6,
        center: { lat: 28.2096, lng: 83.9856 }
    };

    var map = new google.maps.Map(document.getElementById('map'), options);
    try {
        const response = await fetch('http://localhost:3000/properties/getAllProperties')
        const convert = await response.json()

        let cords = { lat: 28.2096, lng: 83.9856 }
        convert.forEach(e => {
            cords.lat = Number(e.coordinates.lat)
            cords.lng = Number(e.coordinates.lng)
            new google.maps.Marker({
                position: cords,
                map: map,
                icon: {
                    url: 'home.png',
                    scaledSize: new google.maps.Size(40, 40)
                }
            });
        });
    } catch (e) { console.log("fetch error:", e) }
}
