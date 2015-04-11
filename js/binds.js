var collectorCustom = {
	user: "",
	repo: "",
	text: "Send Feedback", 
	colorText: "#FFF", 
	colorBack: "215EBB"
};

function getTemplate(templatePath, data) 
{
	return window['JST'][templatePath](data);
}

function updateColor() {
	$("#user_button").css("cssText", 
		"background-color: " + collectorCustom.colorBack + " !important;" + 
		"color: " + collectorCustom.colorText + " !important"
	);
}

function doHighlight() 
{
	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
  	});
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
	    	collectorCustom.colorBack = color;
	    	updateColor();
	    },
	    change: function(color) {
        	collectorCustom.colorBack = color;
        	updateColor();
    	}
	});

	$("#colorpickerText").spectrum({
	    color: "#FFF",
	    showInput: true,
	    className: "full-spectrum",
	    showInitial: true,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    move: function (color) {
	    	collectorCustom.colorText = color;
	    	updateColor();
	    },
	    change: function(color) {
        	collectorCustom.colorText = color;
        	updateColor();
    	}
	});

	$('#tab_text').keyup(function() {
		$('#user_button').html($(this).val());
		collectorCustom.text = $(this).val();
	});

	$('#git_username').keyup(function() {
		collectorCustom.user = $(this).val();
	});

	$('#git_repo').keyup(function() {
		collectorCustom.repo = $(this).val();
	});

	$('#tabCode').click(function() {
		$('#collectorCode').html(JSON.stringify(collectorCustom));
		doHighlight();
	});
}
