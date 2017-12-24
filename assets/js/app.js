

// Check off items by clicking them:
$( "li" ).on( "click", function() {

	// Add/remove COMPLETED class:
	$( this ).toggleClass( "completed" );

});