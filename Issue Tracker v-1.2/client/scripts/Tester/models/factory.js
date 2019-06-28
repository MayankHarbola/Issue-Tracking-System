app.factory("myfactory",function($q,$http,ADD_ISSUE,GET_ISSUE,SINGLE_ISSUE){
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

        getIssue(){
            let defer = $q.defer();

            $http.get(GET_ISSUE).then((data)=>{
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

    }
})