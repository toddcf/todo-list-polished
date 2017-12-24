

// Check off items by clicking them:
// Note that you must select "ul" rather than "li" because the click listener will only be added to elements that existed the first time the code was run.
// We then add a second argument of "li" to mean that whenever an "li" is clicked inside the "ul", do the following:
$( "ul" ).on( "click", "li", function() {

	// Add/remove COMPLETED class:
	$( this ).toggleClass( "completed" );

});

// Click X to delete:
$( "ul" ).on( "click", "span", function( event ) {

	// Fade out the parent element of the span, which is the entire li:
	$( this ).parent().fadeOut( 500, function() {

		// AFTER it fades out, remove it so it's no longer slowing down the computer:
		$( this ).remove();

	});
	// Prevent event bubbling so that the parent element (li, etc.) does not register the click event:
	event.stopPropagation();
	// $( this ).

});

// If ENTER key is pressed, 
$( "input[type='text']" ).keypress( function( event ) {

	if ( event.which === 13 ) {

		// Grab value of input and store it in variable:
		var todoText = ( $( this ).val() ); /* "this" refers to the input value above. */

		// Clear input field:
		$( this ).val( "" );

		// Create new <li> and add it to <ul>:
		$( "ul" ).append( "<li><span>X</span> " + todoText + "</li>" );

	}

});