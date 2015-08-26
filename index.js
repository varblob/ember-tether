/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-tether',

  included: function(app) {
    if (app.import) {
      this.importBowerDependencies(app);
    }
  },

  importBowerDependencies: function(app) {
    app.import(app.bowerDirectory + '/tether/dist/js/tether.min.js');
    // ['utils', 'tether', 'abutment', 'constraint'].forEach(function(libName){
    //   app.import(app.bowerDirectory + '/tether/src/js/' + libName + '.js');
    // });
  }
};
