'use strict';

/**
 * @ngdoc service
 * @name goTodoAppApp.todoStorage
 * @description
 * # todoStorage
 * Factory in the goTodoAppApp.
 */
angular.module('goTodoAppApp')
  .factory('todoStorage', ['restEndPoint', '$resource', function (restEndPoint, $resource) {
    var storage  = {

        todos : function(params){
            return $resource(restEndPoint+'/todos/', {}, {
                get : {method : 'GET', isArray:true},
                post: {method : 'POST', params:params},
            });
        },

        todo : function(urlParams, params){
            return $resource(restEndPoint+'/todos/:id/', urlParams, {
                get : {method : 'GET', isArray:false},
                patch: {method : 'PUT', params:params},
                remove: {method: 'DELETE'}
            });
        }
    };

    return storage;
  }]);
