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
        'username': '',
        'password': '',
        'newname': '',
        'newemail': '',
        'newpwd': '',
        'newtype':'',
        'firsttym':''
      }
     $scope.edit = (val)=>{
       editObj.username = val.username;
       editObj.password = val.password;
       
       
       $scope.type = val.usertype;
       $scope.name = val.username;
       $scope.password = val.password;
       $scope.email = val.email;
      $scope.firsttym =  ''+val.firsttym;
    
     }

     //  *******************************update Button********************
    $scope.tryme = ()=>{
        // SweetAlert.swal("Are you sure", "user added success fully", "success");;
        SweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            }, 
         );
    }

     $scope.update = ()=>{
        editObj.newname = $scope.name;
        editObj.newemail = $scope.email;
        editObj.newpwd = $scope.password;
        editObj.newtype = $scope.type;
        editObj.firsttym = $scope.firsttym;
        console.log(editObj);
    
        var pr = fact.edit(editObj);
    
        pr.then(data=>{
            console.log(data);
            SweetAlert.swal("Edited user", "user Edited successfully 😃", "success");;
        },error=>{
            console.log(error);
        })
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
// ***********************************
$scope.what = (type)=>{
  if(type == 'admin'){
     var ad = 'admin1'
    
     

  }
  if(type == 'tester'){
      $scope.tester = true;
      $scope.admin = false;
      $scope.dev = false;

  }
  if(type == 'devloper'){
    $scope.dev = true;
    $scope.admin = false;
    $scope.tester = false;

  }
}

})


 
 


 
  
