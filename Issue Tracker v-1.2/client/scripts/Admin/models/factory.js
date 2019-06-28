app.factory("fact",function($q,$http,USER_LIST,EDIT_USER,ADD_USER,DELETE_USER){
    return {
        userlist(){
            let defer = $q.defer();
            $http.get(USER_LIST).then((data)=>{
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            })
            return defer.promise;
        },

        edit(data){
            let defer = $q.defer();
    
            $http.post(EDIT_USER,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        add(data){
            let defer = $q.defer();
    
            $http.post(ADD_USER,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },

        delete(data){
            let defer = $q.defer();
    
            $http.post(DELETE_USER,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });
    
            return defer.promise;
        },
    
    }
})