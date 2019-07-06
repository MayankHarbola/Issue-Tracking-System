app.controller("Dashboard",function($scope,$window,$location){

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
    $scope.username = record.username;
    console.log("record is ",record);

    $scope.logout = ()=>{
        $window.location.href="/client/index.html";
    }
})