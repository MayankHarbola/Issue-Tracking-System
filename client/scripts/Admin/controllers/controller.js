app.controller("controller",function($scope,$window,fact,SweetAlert){
 
    // ********************userlist ******************************
    let promise = fact.userlist();
    
    var myarr = [];
    promise.then(data=>{
        console.log(data.data.record);
      
        // console.log(data.data.record);
        
        var myobj;
        for(let value of data.data.record){
          myobj = {
              userid: value.userId,
              usertype: value.usertype,
              username: value.username,
              password: value.password,
              email: value.email,
              firsttym: value.firsttym
          }
          myarr.push(myobj);
        }
        $scope.users = myarr;
        
   
    },error=>{
         console.log(error);
    })


    // ************************Edit button*****************************
    var editObj = {
        'rightId': '',
        'Rights': '',
        'type': ''
      }
     $scope.edit = (val)=>{
       editObj.rightId = val.userid;
      
       
       
       $scope.type = val.usertype;
       $scope.name = val.username;
       $scope.password = val.password;
       $scope.email = val.email;
      $scope.firsttym =  ''+val.firsttym;

      if(val.usertype == 'admin'){
        $scope.allAdmin = true;
        $scope.allTester = false;
        $scope.allDevloper = false;
  
      }else if(val.usertype == 'tester'){
        $scope.allTester = true;
        $scope.allAdmin = false;
        $scope.allDevloper = false;
      }
      else if(val.usertype == "devloper"){
        $scope.allDevloper = true;
        $scope.allTester = false;
        $scope.allAdmin = false;
      }
     
    
     }

     $scope.what = (type)=>{
      console.log(type);
      if(type == 'admin'){
       $scope.allAdmin = true;
       $scope.allTester = false;
       $scope.allDevloper = false;
 
     }else if(type == 'tester'){
       $scope.allTester = true;
       $scope.allAdmin = false;
       $scope.allDevloper = false;
     }
     else if(type == "devloper"){
       $scope.allDevloper = true;
       $scope.allTester = false;
       $scope.allAdmin = false;
     }
 
     }
    
     //  *******************************update Button********************
   

     $scope.update = ()=>{
        // editObj.newname = $scope.name;
        // editObj.newemail = $scope.email;
        // editObj.newpwd = $scope.password;
        // editObj.newtype = $scope.type;
        // editObj.firsttym = "false";
        
        if($scope.type == 'admin'){
          
           var newarr = [...$scope.Adminrights,...$scope.check];
        }
        else if($scope.type == 'tester'){
          var newarr = [...$scope.TesterRights,...$scope.check];
        }else{
          var newarr = [...$scope.DevRights,...$scope.check];
           
        }
        var arr1 = angular.toJson( newarr );
        editObj.Rights = arr1;
        editObj.type = $scope.type;
        
        console.log("Edit object is",editObj);
        var pr = fact.edit(editObj);
    
        pr.then(data=>{
            console.log(data);
            SweetAlert.swal("Edited user", "user Edited successfully 😃", "success");;
        },error=>{
            console.log(error);
        })
      }
      $scope.check = [];
      $scope.checkbox= (right)=>{
        // console.log($scope.Adminrights);
        var idx = $scope.check.indexOf(right);
        if (idx > -1) {
          $scope.check.splice(idx, 1);
        }
    
        // Is newly selected
        else {
          $scope.check.push(right);
        }

        console.log($scope.check);
      }

      // ***************adding user********************
$scope.addUser = ()=>{
    var userobj ={
        'usertype': $scope.type,
        'username': $scope.name,
        'email': $scope.email,
        'password': $scope.password,
        'firsttym': $scope.firsttym
    }

    var pr = fact.add(userobj);

    pr.then(data=>{
        SweetAlert.swal("Added user", "user Added successfully 😃", "success");
    },error=>{
        console.log(error);
    })

}


   //******************************delete button********************* */
  
   $scope.delete = (selectedObj)=>{
    // $scope.class = "red";
       if(selectedObj.markfordelete == true){
         selectedObj.markfordelete = false;
       }else{
     selectedObj.markfordelete = true;
       }
        
  }
  $scope.deleted = ()=>{
      console.log(myarr);
      SweetAlert.swal({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false }, 
     function(isConfirm){ 
        if (isConfirm) {
            console.log("haan");
            for(let i = 0;i<myarr.length;i++){
                    if(myarr[i].markfordelete){
                     
                      var obj = {
                        email: myarr[i].email,
                        firsttym: myarr[i].firsttym,
                        password: myarr[i].password,
                        username: myarr[i].username,
                        usertype: myarr[i].usertype,
                      }
            
                      var pr = fact.delete(obj);
            
                          pr.then(data=>{
                              console.log("this is ")
                          console.log('data edited Succesfully 😃',data.data.message);
                          },error=>{
                          console.log(error);
                          })
                    }
                     
                  }
              SweetAlert.swal("Deleted!", "Your file has been deleted Successfuly 😃.", "success");
              
        } else {
           SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
     });
  }
// ********************Right List*******************************

let pr = fact.rightlist();

pr.then(data=>{
   console.log("Rights are",data.data);
   $scope.Adminrights = data.data.adminRight.userRights;
   $scope.TesterRights = data.data.testerRight.userRights;
   $scope.DevRights = data.data.devloperright.userRights;
}
  ,error=>{
    console.log(error);
  });

// *****************Issue list********************************

let IssuesPromise = fact.getIssue();
IssuesPromise.then(data=>{
console.log("Issue is ",data.data.data);
var myarr = [];
arr = data.data.data
var myobj;
for(let value of data.data.data){
 myobj = {
   rightId: value.rightId,
   projectName: value.projectName,
   title: value.title,
   assignTo: value.assignTo,
   bugSatus: value.bugSatus,
   assignedBy: value.name,
   type: value.type
 }
 myarr.push(myobj);
}
console.log("before : ",$scope.Issues);

$scope.Issues = myarr;


console.log("After : ",$scope.Issues);

},error=>{
console.log(error);
});

 
})
