FlowRouter.route('/',{
    name: 'home',
    action(){
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