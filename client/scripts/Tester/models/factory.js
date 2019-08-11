app.factory("myfactory",function($q,$http,ADD_ISSUE,POST_ISSUE,SINGLE_ISSUE,REOPEN,CLOSE){
    return {
        addissue(data){
          let defer = $q.defer();
    
            $http.post(ADD_ISSUE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        PostIssue(data){
            let defer = $q.defer();
            console.log("userobj is",data)

            $http.post(POST_ISSUE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        getSingleIssue(data){
            let defer = $q.defer();
    
            $http.post(SINGLE_ISSUE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        reopen(data){
            let defer = $q.defer();
    
            $http.post(REOPEN,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        closeBug(data){
            let defer = $q.defer();
    
            $http.post(CLOSE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        }

    }
})