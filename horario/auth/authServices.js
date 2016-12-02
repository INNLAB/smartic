angular.module("app")
.factory('authServices', function($http, $localstorage) {
    var service = {};

    service.Login = function Login(username, password, callback) {
        
        $http.post('url', { username: username, password: password })
            .success(function (response) {
                console.log(response);
                callback(response);
            })
            .error(function (e) {
                console.log(e);
            });
    };

    service.SetCredentials = function SetCredentials(token) {
        if(typeof(Storage) !== "undefined") {
            $localstorage.set('Token', token);
        }
        else {
            alert("No Local Storage");
        }
    };

    service.ClearCredentials = function ClearCredentials() {
        if(typeof(Storage) !== "undefined") {
            $localstorage.remove('Token');
        }
        else {
            alert("No Local Storage");
        }
    };

    return service;
})