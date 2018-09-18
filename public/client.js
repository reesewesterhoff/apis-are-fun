console.log('js');

let apiApp = angular.module('ApiApp', []);

apiApp.controller('ApiController', ['$http', function($http){
    let vm = this;

    vm.message = ('taco');
    vm.starships = [];

    vm.getPlanets = function () {
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/species/',
            params: {
                classification: 'reptile'
            }
        }).then(function(response){
            console.log(response.data);
            vm.starships = response.data.results;
        }).catch(function(error){
            console.log('error getting planets from swapi', error); 
        });
    }


    vm.getPlanets();
}]);
    