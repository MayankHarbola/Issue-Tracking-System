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

        templateUrl:'../AdminViews/Dashboard.html',
        resolve:{
            "check":function($location){   //function to be resolved, accessFac and $location Injected
                var usertype = JSON.parse(localStorage.record);
                console.log("laalalall",usertype.usertype);

                if(usertype.usertype == "admin"){    //check if the user has permission -- This happens before the page loads
                   console.log(usertype);
                    
                }
               else if(usertype.usertype == "devloper"){
                   console.log(usertype);
                 $location.path('/devloperDashboard');
               } 
               else{
                console.log(usertype);

                    $location.path('/testerDashboard');                //redirect user to home if it does not have permission.
                    // alert("You don't have access here");
                }
            }

        } 
    })

    .when('/devloperDashboard',{
        templateUrl: '../Dev Views/devDashboard.html'
       
    })

    .when('/testerDashboard',{
        templateUrl: '../Tester Views/testerDashboard.html'
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

