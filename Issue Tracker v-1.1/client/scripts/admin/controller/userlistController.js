app.controller('userlist',function($scope,$window,adminfact){
    



    // **************showing user*********************
    var userlist;
    let promise = adminfact.userlist();
    
    promise.then(data=>{
        console.log(data.data.record);
      
        $scope.users = data.data.record;
        userlist = data.data.record;
   
    },error=>{
         console.log(error);
    })

    // ***************adding user********************
    $scope.addUser = ()=>{
        var userobj ={
            'usertype': $scope.type,
            'username': $scope.name,
            'email': $scope.email,
            'password': $scope.password,
            'firsttym': $scope.firsttym
        }

        var pr = adminfact.add(userobj);

        pr.then(data=>{
            alert('data added 😃');
        },error=>{
            console.log(error);
        })

    }

    // *************************editing*********
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
    $scope.firsttym = '' + val.firsttym;
    //  console.log($scope.firsttym);
   }

  //  *******************************update********************

  $scope.update = ()=>{
    editObj.newname = $scope.name;
    editObj.newemail = $scope.email;
    editObj.newpwd = $scope.password;
    editObj.newtype = $scope.type;
    editObj.firsttym = $scope.firsttym;
    console.log(editObj);

    var pr = adminfact.edit(editObj);

    pr.then(data=>{
        alert('data edited Succesfully 😃');
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
    if($window.confirm('Are you sure want to delete data ❌')){
      for(let i = 0;i<userlist.length;i++){
        if(userlist[i].markfordelete){
         
          var obj = {
            email: userlist[i].email,
            firsttym: userlist[i].firsttym,
            password: userlist[i].password,
            username: userlist[i].username,
            usertype: userlist[i].usertype,
          }

          var pr = adminfact.delete(obj);

              pr.then(data=>{
              console.log('data edited Succesfully 😃',data.data.message);
              },error=>{
              console.log(error);
              })
        }
         
      }

      alert('data delted Succesfully 😃')
    }
  }

  //  *********************Clear All*****************************


  $scope.clearAll = ()=>{
    if($window.confirm('Are you sure want to delete ALL data ❌'))
    {
      
          for(let i = 0;i<userlist.length;i++)
          {
                var pr = adminfact.delete({});

                    pr.then(data=>{
                    console.log('data edited Succesfully 😃',data.data.message);
                    },error=>{
                    console.log(error);
                    })
              
                  
              
            }

            alert('data delted Succesfully 😃')

    }
    
  }


})

