app.controller("myctrl",function($scope,Upload,fact){
    $scope.msg = '';
    $scope.submit = function(fileObject) {
    console.log($scope.file);
            console.log('File is ',fileObject);
          $scope.upload($scope.file);
        };
      

      $scope.upload = function (file) {
        Upload.upload({
            url: 'http://localhost:1234/upload',  // Server Side URL to Upload
            data: {file: file}
        }).then(function (resp) {
            $scope.msg = resp.data.msg;
            console.log('Success ',resp);
            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' );
            $scope.percentage = progressPercentage;
        });
    };
    
    
    let promise = fact.userlist();
    
    
    promise.then(data=>{
        console.log(data.data.record);
      
        // console.log(data.data.record);
        var myarr = [];
        var myobj;
        for(let value of data.data.record){
          myobj = {
              userid: value.userId,
              usertype: value.usertype,
              username: value.username,
              password: value.password,
              email: value.email
          }
          myarr.push(myobj);
        }
        $scope.users = myarr;
        
   
    },error=>{
         console.log(error);
    })

})

