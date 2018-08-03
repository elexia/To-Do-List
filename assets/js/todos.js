// Check off Specific To-Dos by clicking
// Can only add listeners on elements that exist
// Second argument says: when an li is clicked, add code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Stops event from "bubbling up" into parent events
	event.stopPropagation();
});

// 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new todo from text input
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
	}
});

//
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})