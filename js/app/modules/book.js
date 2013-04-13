define([
	"namespace",
	//libs
	"use!backbone"
],

function(namespace, Backbone) {
	var Book = namespace.module();

	//Router
	Book.Router = Backbone.Router.extend({
		routes: {
			'book/:p' : 'details'
		},

		details: function(hash) {
			var view = new Book.Views.Details({
				model: Library.get(hash)
			});
			view.render(function(el) {
				$('#main').html(el);
			});
		}
	});

	//Intantiate router
	var router = new Book.Router();

	//Model
	Book.Model = Backbone.Model.extend({});

	//Collection
	Book.Collection = Backbone.Collection.extend({
		model: Book.Model
	});

	//Views
	//This will fetch the Book Template and render it
	Book.Views.Details = Backbone.View.extend({
		template: "js/app/templates/books/details.html",

		render: function(done) {
			var view = this;

			namespace.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl(view.model.toJSON());

				if(_.isFunction(done)) {
					done(view.el);
				}
			});
		}
	});
	//This will fetch the book list template and render it
	Book.Views.List = Backbone.View.extend({
		template: "js/app/templates/books/list.html",

		render: function(done) {
			var view = this;

			namespace.fetchTemplate(this.template, function(tmpl) {
				view.el.innerHTML = tmpl({books: view.collection.toJSON()});
				
				if(_.isFunction(done)) {
					done(view.el);
				}
			});
		}
	});

	//Required, return the module for AMD compliance
	return Book;

});