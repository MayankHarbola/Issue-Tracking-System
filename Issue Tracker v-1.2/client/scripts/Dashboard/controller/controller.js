app.controller("Dashboard",function($scope,$location){

    $scope.isActive = function (viewLocation) {
        // console.log(viewLocation);
        // console.log("this is path",$location.path);
        var active = (viewLocation === $location.path());
        return active;
   };

    var retrievedObject = localStorage.getItem('right');
    $scope.data = JSON.parse(retrievedObject);
    // console.log('retrievedObject: ', $scope.data);
    
    
})