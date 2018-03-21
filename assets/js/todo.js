// 1. Make a list and style it
// ***IMPORTANT ***Add a listener ON to ul, not li - to apply the code to the entire ul parent, then add li to run this code when li is clicked

$("ul").on("click", "li", (function(){
	$(this).toggleClass("completed");
}));
// Below longer&same code wrote without a class 

// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 		});
// 	}
// });

// 2. Write code to delete single Todo

$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// THIS - the element that we clicked on
	// PARENT - gives us the li
	event.stopPropagation();
	// Event method will stop the event from bubbling up to other parent elements
}));

// 3. Make an text input work 

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// Grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
	}
});

// 4. Make a pencil icon work as button

$(".fa-edit").on("click", function(){
	$("input[type='text']").fadeToggle();
});