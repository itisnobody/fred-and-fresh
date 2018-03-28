// Слайдеры

$('.js-slider-clients').owlCarousel({
    loop:true,
    margin:10,
    nav:true
})

// Кнопки

$('#sandwich').click(function() {
    $('#sandwich').toggleClass('is-active');
    $('.menu__list').toggleClass('is-visible');
});

$('#delivery-offers').click(function() {
    $('#delivery-offers').toggleClass('is-active');
    $('.offers__delivery').toggleClass('is-visible');
});

// Карта

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 50.4533908, lng: 30.5139039 },
            zoom: 14
        }),

        marker = new google.maps.Marker({
            position: { lat: 50.4474777, lng: 30.5136694 },
            map: map
        }),

        marker = new google.maps.Marker({
            position: { lat: 50.459679, lng: 30.5092095 },
            map: map
        });
}