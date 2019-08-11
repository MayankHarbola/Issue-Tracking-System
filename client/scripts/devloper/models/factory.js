app.factory("dev_fact",function($http,$q,ASSIGN_ISSUE,SOLUTION){
    return {
        getIssue(data){
            let defer = $q.defer();
    
            $http.post(ASSIGN_ISSUE,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },
        solveit(data){
            let defer = $q.defer();
    
            $http.post(SOLUTION,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        }
    }
})