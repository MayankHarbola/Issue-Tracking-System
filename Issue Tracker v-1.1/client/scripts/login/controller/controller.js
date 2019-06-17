app.controller("ctrl",($scope,$location, $window,factory)=>{
    $scope.login = ()=>{
     console.log($scope.drop);
        $scope.datas = {
          'usertype': $scope.drop,
          'username': $scope.logUsername,
          'password': $scope.logPassword,
        }
    
        let promise = factory.login($scope.datas);
    
        promise.then(data=>{
          
          $scope.loginmsg =   data.data.message;
          // console.log(data.data.message.usertype);
          if(data.data.record){
         if(data.data.record.firsttym){
          // $window.location.href = '/chngpwd';
          // $location.path('/chngpwd').replace().notify(false);
          $location.path('/chngpwd', false);
         }else{
            if(data.data.record.usertype == 'admin'){
              
              $location.path('/admin', false);
            }
            else if(data.data.record.usertype == 'tester'){
              $location.path('/tester', false);
            }else{
              $location.path('/dev', false); 
            }
         }
        }
      },error=>{
          $scope.error = error;
      })
    }


    // ***************for change password***************************

    $scope.chng = ()=>{
      
           $scope.data = {
             'username': $scope.currentusername,
             'password': $scope.curpassword,
             'newname': $scope.newusername,
             'newemail': $scope.email,
             'newpwd': $scope.newpassword
           }
       
         
           let promise = factory.chng($scope.data);
       
           promise.then(data=>{
            
             $scope.chngmsg =   data.data.message;

            // $scope.chngmsg = data.data.message.email;
             
          
             
         },error=>{
             $scope.error = error;
         })
       }
    
})