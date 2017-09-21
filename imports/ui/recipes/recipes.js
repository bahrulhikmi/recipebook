import './Recipes.html';
import './NewRecipe.html';
import './Recipe.html';

Template.Recipes.onCreated(function recipesOnCreated(){
    Meteor.subscribe('recipes');
  });

Template.Recipes.helpers({
  getRecipes(){
      return Recipes.find({});
    },
  });