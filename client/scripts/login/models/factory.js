app.factory("factory",($http,$q,LOGIN_URL,CHNGPWD_URL,CHECK_URL)=>{
    return {
        check(){
            let defer = $q.defer();

            $http.get(CHECK_URL).then((data)=>{
                defer.resolve(data);   
            },(error)=>{
                defer.reject(error);
            });

            return defer.promise;
        },


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