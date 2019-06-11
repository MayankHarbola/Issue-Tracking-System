app.factory("factory",($http,$q,LOGIN_URL,CHNGPWD_URL)=>{
    return {
        login(data){
            let defer = $q.defer();

            $http.post(LOGIN_URL,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });

            return defer.promise;
        },

        chng(data){
            let defer = $q.defer();

            $http.post(CHNGPWD_URL,JSON.stringify(data)).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });

            return defer.promise;
        },

    }
})