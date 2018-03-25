function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
        	center: {lat: 50.4533908, lng: 30.5139039},
        	zoom: 14
        }),

        	marker = new google.maps.Marker({
            position:  {lat: 50.4474777, lng: 30.5136694},
            map: map
        }),

        	marker = new google.maps.Marker({
            position:  {lat: 50.459679, lng: 30.5092095},
            map: map
        });
      }