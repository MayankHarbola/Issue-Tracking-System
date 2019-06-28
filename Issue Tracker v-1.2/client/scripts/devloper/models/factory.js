app.factory("dev_fact",function($http,$q,ASSIGN_ISSUE){
    return {
        getIssue(data){
            let defer = $q.defer();
    
            $http.post(ASSIGN_ISSUE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        }
    }
})