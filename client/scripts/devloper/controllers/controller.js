app.controller("dev-ctrl",function($scope,Upload,$location,$http,dev_fact){
   console.log("dev controller");
   var record = localStorage.getItem('record');
   $scope.rec = JSON.parse(record);

  //  console.log($scope.rec);
    
   data = {
    assignTo: $scope.rec.username
   }
   let pr = dev_fact.getIssue(data);
   var arr = [];

    pr.then(data=>{
    console.log("issues are",data.data.record);
   
    for(let value of data.data.record){
      var obj = {
        bugID: value.rightId,
        title: value.title,
        type: value.type,
        assignedby: value.name,
        status: value.bugSatus
        }
      arr.push(obj);
    }
    $scope.issues = arr;


    console.log($scope.issues);
    }
  ,error=>{
    console.log(error);
  });

  $scope.moreInfo = (bugid)=>{
    console.log(bugid); 
    localStorage.bugid = JSON.stringify(bugid);
    $location.path('/singlIssue', false);
  }

  $scope.solvebug = (bugid)=>{
    console.log(bugid); 
    localStorage.bugid = JSON.stringify(bugid);
    $location.path('/solvebug', false);
  }

  
  $scope.solution = ()=>{
  var bugID = JSON.parse(localStorage.bugid);

    $scope.upload($scope.file,bugID);
  }
  $scope.upload = function (file,bugID) {
    Upload.upload({
        url: 'http://localhost:1234/solution',  // Server Side URL to Upload
        data: { 
        'file': file,
        rightId: bugID,
        bugSatus: $scope.bugSatus,
        solution: $scope.description,
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


$scope.redirect = (bugid)=>{
  localStorage.bugid = JSON.stringify(bugid);
  $location.path('solvedIssue',false);
}



})

 
