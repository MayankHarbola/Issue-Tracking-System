app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/profile',{
        templateUrl:'./profile.html'
    })
    .when('/Editprofile',{
        templateUrl:'./Editprofile.html'
    })
    
    // ********************************
    .when('/',{
        templateUrl:'../AdminViews/Dashboard.html'
    })

    
    .when('/solved',{
        templateUrl:'../AdminViews/solvedIssue.html'
    })

    .when('/unsolvedsolved',{
        templateUrl:"../AdminViews/OpenIssue.html",
    })
    .when('/Userlist',{
        templateUrl:'../AdminViews/Edituser.html'
        
    })
    
    .when('/userXlx',{
        templateUrl:'../AdminViews/uploadexcel.html'
       
    })
    .when('/list',{
        templateUrl:'../AdminViews/userList.html'
       
    })
    .when('/Dashboard',{
        templateUrl:'../AdminViews/Dashboard.html'
    })
    
    // ******************************Tester Routes ******************************************

    .when('/reportedissue',{
        templateUrl:'../Tester Views/reportedbug.html'
    })

    .when('/resolvedissue',{
        templateUrl:'../Tester Views/resolvedbug.html'
    })

    .when('/newissue',{
        templateUrl:'../Tester Views/createBug.html'
    })

    .when('/rtbd',{
        templateUrl:'../Tester Views/tbd.html'
    })

    .when('/nab',{
        templateUrl: '../Tester Views/tbd.html'
    })

    .when('/singlIssue',{
        templateUrl:'../Tester Views/singleIssue.html'
    })

    .when('/solvedIssue',{
        templateUrl:'../Tester Views/solvedIssue.html'
    })
    
    
    // ***************************Devloper Rights*******************************
    
     
    .when('/issuelist',{
        templateUrl:'../Dev Views/issuelist.html'
    })

    
    .when('/pendingbug',{
        templateUrl: '../Dev Views/criticalBug.html'
    })

    
    .when('/solvedissue',{
        templateUrl:'../Dev Views/closedBug.html'
    })


    
    .when('/rtbd',{
        templateUrl:'../Dev Views/rtbd.html'
    })

    
    

    .when('/solvebug',{
        templateUrl:'../Dev Views/solvebug.html'
    })


    
   


    .otherwise({
        // template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})

