app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/',{
        templateUrl:'../AdminViews/Dashboard.html'
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
        templateUrl:'../Tester Views/reportedbug.html'
    })

    .when('/resolvedissue',{
        templateUrl:'../Tester Views/resolvedbug.html'
    })

    .when('/newissue',{
        templateUrl:'../Tester Views/createBug.html'
    })

    .when('/tbd',{
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
        template:'<h3>Pending Bug</h3>'
    })

    
    .when('/solvedissue',{
        template:'<h3>Solved Issue<h3>'
    })


    
    .when('/rtbd',{
        template:'<h3>to be discussed</h3>'
    })

    
    .when('/rnab',{
        template:'<h3>Not a bug</h3>'
    })

    .when('/solvebug',{
        templateUrl:'../Dev Views/solvebug.html'
    })


    
   


    .otherwise({
        // template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})

