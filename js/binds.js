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

	$('#next1').click(function() {
		if (collectorCustom.user != '' && collectorCustom.repo != '') {
			$('#tabColor > a').click();
		}
	});

	$('#next2').click(function() {
		if (collectorCustom.colorText != '' && collectorCustom.colorBack != '' && collectorCustom.text != '') {
			$('#tabCode > a').click();
		}
	});

	$('#back1').click(function() {
		$('#tabRepo > a').click();
	});

	$('#tabCode').click(function() {

		$('#collectorCode').text('');

		var source = "
<script type='text/javascript'>
    window.gcAsyncInit = function () {
        window.feedback = new GitCollector({
            username: '{{username}}',
            repository: '{{repo}}',
            color: '{{color}}',
            textColor: '{{textColor}}',
            text: '{{text}}'
        });
    };
    (function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'http://gitcollector.com/js/compiled/GitCollector.min.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(s, null);
    })();
</script>
	";

		source = source.replace("{{username}}", collectorCustom.user);
		source = source.replace("{{repo}}", collectorCustom.repo);
		source = source.replace("{{color}}", collectorCustom.colorBack);
		source = source.replace("{{textColor}}", collectorCustom.colorText);
		source = source.replace("{{text}}", collectorCustom.text);
		source = source.replace("#", "");
		source = source.replace("#", "");

		$('#collectorCode').text(source);
		doHighlight();
	});
}
