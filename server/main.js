
import '../imports/api/recipes/recipes.js';
import '../imports/api/recipes/server/publications.js';

Meteor.startup(function(){
    console.log(Meteor.settings.hello);
});