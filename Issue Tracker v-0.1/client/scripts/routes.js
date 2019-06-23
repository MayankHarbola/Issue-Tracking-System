app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        template:"<h3>Dashboard</h3>"
    })
    .when('/solved',{
        templateUrl:'../AdminViews/solvedIssue.html'
    })

    .when('/unsolvedsolved',{
        template:"<h3>Issue Table</h3>",
    })
    .when('/Userlist',{
        templateUrl:'../AdminViews/userList.html'
        
    })
    
    .when('/userXlx',{
        templateUrl:'../AdminViews/uploadexcel.html'
       
    })
    .when('/Dashboard',{
        templateUrl:'../AdminViews/Dashboard.html'
    })
    
    // ******************************Tester Routes ******************************************

    .when('/reportedissue',{
        template:'<h3>Reported BUG</h3>'
    })

    .when('/resolvedissue',{
        template:'<h3>Resolved BUG</h3>'
    })

    .when('/newissue',{
        templateUrl:'../Tester Views/createBug.html'
    })

    .when('/tbd',{
        template:'<h3>To be discussed</h3>'
    })

    .when('/nab',{
        template:'<h3>Reported Not a Bug</h3>'
    })
    .otherwise({
        //template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})

