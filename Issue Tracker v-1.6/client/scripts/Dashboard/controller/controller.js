app.run(function(DashFact){
    var record = JSON.parse(localStorage.record);
    var pr = DashFact.getProfile({userId: record.userId});
    pr.then(data=>{
        console.log(data.data.profile);
        localStorage.record   = JSON.stringify(data.data.profile);
          
        },error=>{
          console.log("Error is",error);
        })
});

app.factory('DashFact',function($q,$http,GETPROFILE){
    return {
        getProfile(data){
          let defer = $q.defer();
    
            $http.post(GETPROFILE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },
    }
})

app.controller("Dashboard",function($scope,$window,$location,SweetAlert,Upload){

    $scope.isActive = function (viewLocation) {
        // console.log(viewLocation);
        // console.log("this is path",$location.path);
        var active = (viewLocation === $location.path());
        return active;
   };

    var retrievedObject = localStorage.getItem('right');
    $scope.data = JSON.parse(retrievedObject);
    // console.log('retrievedObject: ', $scope.data);
    var record = JSON.parse(localStorage.record);

    console.log("yahoooo",record)
// *********************************************************
    $scope.username = record.username;
    $scope.usertype = record.usertype;
    $scope.email = record.email;
    $scope.userId = record.userId;

    $scope.first = record.firstName;
    $scope.second = record.lastName;
    $scope.Address = record.Address;
    $scope.city = record.city;
    $scope.phone = record.phone;
    $scope.country = record.country;
    $scope.pincode = record.postalCode;
    $scope.desc = record.AboutMe;

    if(record.img){
    $scope.img = "../../server/"+ record.img;
    }else{
        $scope.img = './assets/img/default-avatar.png';
    }
    $scope.logout = ()=>{
        $window.location.href="/client/index.html";
    }
    
    $scope.update = ()=>{
       console.log($scope.file,$scope.username);

        $scope.upload($scope.file);
    }
    $scope.upload = function (file) {
        Upload.upload({
            url: 'http://localhost:1234/updateProfile',  // Server Side URL to Upload
            data: { 
            'file': file,
            'username': $scope.username ,
            'email': $scope.email ,
            'userId':$scope.userId,
            'first': $scope.first,
            'second': $scope.second,
            'Address': $scope.Address,
            'city': $scope.city,
            'phone': $scope.phone,
            'country': $scope.country,
            'pincode': $scope.pincode,
            'desc': $scope.desc,
            }
        }).then(function (resp) {
            // $scope.msg = resp['data']['msg'];
            SweetAlert.swal("Added Issue", "Issue Added successfully 😃", "success");
            console.log('Success ',resp.data);
            //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' );
        });
    };

    // **************************************************GEt Profile
    
      


})