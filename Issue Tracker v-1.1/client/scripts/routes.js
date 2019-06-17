app.config(function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'views/howtouse.html'
    })
    .when('/techuse',{
        templateUrl:'views/techuse.html'
    })

    .when('/features',{
        templateUrl:'views/features.html',
    })
    .when('/login',{
        templateUrl: 'views/login.html',
        
    })
    
    .when('/chngpwd',{
        templateUrl: 'views/chngpwd.html'
    })
    .when('/admin',{
        templateUrl: 'Admin views/admin.html'
    })
    .when('/tester',{
        templateUrl: 'views/tester.html'
    })
    .when('/dev',{
        templateUrl: 'views/dev.html'
    })
    .when('/adduser',{
        templateUrl: 'Admin views/adduser.html'
    })

    .when('/userList',{
        templateUrl: 'Admin views/userlist.html'
    })
    .otherwise({
        //template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})