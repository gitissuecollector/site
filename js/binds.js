function getTemplate(templatePath, data) 
{
	return window['JST'][templatePath](data);
}

function homeBinds() 
{
	$("#colorpicker").spectrum({
	    color: "#215EBB",
	    showInput: true,
	    className: "full-spectrum",
	    showInitial: true,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    move: function (color) {
	    	$("#user_button").css("cssText", "background-color: " + color + " !important;");
	    },
	    change: function(color) {
        	$("#user_button").css("cssText", "background-color: " + color + " !important;");
    	}
	});

	$('#tab_text').keyup(function() {
		var updatedText = $(this).val();
		$('#user_button').html(updatedText);
	});
}
