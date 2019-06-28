app.controller("dev-ctrl",function($scope,dev_fact){
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
        }
      arr.push(obj);
    }
    $scope.issues = arr;


    console.log($scope.issues);
    }
  ,error=>{
    console.log(error);
  });
})