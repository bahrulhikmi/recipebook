import './Recipes.html';
import './NewRecipe.html';
import './Recipe.html';

Template.Recipes.onCreated(function recipesOnCreated(){
    var self = this;
    self.autorun(function(){
      self.subscribe('recipes');
    });
  });

Template.Recipes.helpers({
  getRecipes(){
      return Recipes.find({});
    },
  });