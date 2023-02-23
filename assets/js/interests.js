// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 52.381713, lng: 4.883943 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
      });


  }

  window.initMap = initMap;