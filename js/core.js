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
	initialize: function(user, repo, colorB, colorT)
	{
		this.render(user, repo, colorB, colorT);
	},
	render: function(user, repo, colorB, colorT)
	{
		var data = {
			"user" : user, 
			"repo" : repo, 
			"colorB" : '#' + colorB,
			"colorT" : '#' + colorT
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

			'(:user/:repo)' : function(user, repo) 
			{
				var modal = new ModalView(user, repo, '000', 'FFF');	
			},

			'(:user/:repo/:colorB)' : function(user, repo, colorB) 
			{
				var modal = new ModalView(user, repo, colorB, '000');	
			},

			'(:user/:repo/:colorB/:colorT)' : function(user, repo, colorB, colorT) 
			{
				var modal = new ModalView(user, repo, colorB, colorT);	
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