

// Check off items by clicking them:
$( "li" ).on( "click", function() {

	// Add/remove COMPLETED class:
	$( this ).toggleClass( "completed" );

});

// Click X to delete:
$( "span" ).on( "click", function( event ) {

	// Fade out the parent element of the span, which is the entire li:
	$( this ).parent().fadeOut( 500, function() {

		// AFTER it fades out, remove it so it's no longer slowing down the computer:
		$( this ).remove();

	});
	// Prevent event bubbling so that the parent element (li, etc.) does not register the click event:
	event.stopPropagation();
	// $( this ).

});