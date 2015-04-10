var HomeView = Backbone.View.extend(
{
	el: 'body',
	initialize: function()
	{
		this.render();
	},
	render: function()
	{
		this.$el.html(getTemplate('templates/home.html'));
	}
});

var ModalView = Backbone.View.extend(
{
	el: 'body',
	initialize: function(user, repo, custom)
	{
		this.render(user, repo, custom);
	},
	render: function(user, repo, custom)
	{
		var data = {
			"user" : user, 
			"repo" : repo, 
			"custom" : '#' + custom
		};

		this.$el.html(getTemplate('templates/modal.html', data));
	}
});

var Router = Backbone.Router.extend (
	{ 
		routes: 
		{ 
			'' : function () 
			{
				var home = new HomeView();
				homeBinds();
			},

			'(:user/:repo/:custom)' : function(user, repo, custom) 
			{
				var modal = new ModalView(user, repo, custom);	
			}
		} 
	}
);

var routing = new Router();
Backbone.history.start();

$(document).ready(function() 
{
	// Inits
});