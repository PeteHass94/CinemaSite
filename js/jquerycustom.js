$('.carousel').carousel({
  interval: 30000
})

//Reference: https://jsfiddle.net/fwv18zo1/

var $filmNames = $( '#theFilmNames' ),
		$filmTimes = $( '#theFilmTimes' ),
    $times = $filmTimes.find( 'option' );

$filmNames.on( 'change', function() {
	$filmTimes.html( $times.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );
