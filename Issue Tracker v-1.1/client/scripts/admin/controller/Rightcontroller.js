app.controller("right",($scope,adminfact)=>{

    let promise = adminfact.right();
    
    promise.then(data=>{
        // console.log(data);
      
        // $scope.users = data.data.record;
        // userlist = data.data.record;
        $scope.meta = data.data.right[0];
        console.log(data.data.right);
   
    },error=>{
         console.log(error);
    })
})