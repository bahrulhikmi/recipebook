Accounts.onLogin(function(){
    FlowRouter.go('recipes-book');
});

Accounts.onLogout(function(){
    FlowRouter.go('home');
});


FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name: 'home',
    action(){
        if(Meteor.userId()){
            FlowRouter.go('recipes-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipes-book',{
    name: 'recipes-book',
    action(){    
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id',{
    name: 'recipe',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'})
    }
});

FlowRouter.route('/menu',{
    name: 'menu',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Menu'})
    }
});

FlowRouter.route('/shopping-list',{
    name: 'shopping-list',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'})
    }
});