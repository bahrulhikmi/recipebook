import { Recipes } from '../../../imports/api/recipes/recipes.js';

import './NewRecipe.html'

Template.body.onCreated(function bodyOnCreated(){
    Meteor.subscribe('recipes');
  });


