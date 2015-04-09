function getTemplate(templatePath, data) {
	return window['JST'][templatePath](data);
}

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
	initialize: function(user, repo)
	{
		this.render(user, repo);
	},
	render: function(user, repo)
	{
		this.$el.html(getTemplate('templates/modal.html'));
	}
});

var Router = Backbone.Router.extend (
	{ 
		routes: 
		{ 
			'' : function () 
			{
				var home = new HomeView();
			},

			'(:user/:repo)' : function (user, repo) 
			{
				var modal = new ModalView(user, repo);	
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