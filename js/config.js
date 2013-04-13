// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["app/main"],

  paths: {
    // JavaScript folders
    libs: "../js/libs",
    plugins: "../js/plugins",

    // Libraries
    namespace: "../js/libs/namespace",
    jquery: "../js/libs/jquery",
    underscore: "../js/libs/underscore",
    backbone: "../js/libs/backbone",

    // Shim Plugin
    use: "../js/plugins/use"
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    }
  }
});
