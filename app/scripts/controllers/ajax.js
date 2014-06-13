'use strict';

var myApp = angular.module('yeomanApp');
myApp.controller('AjaxCtrl', function($scope, $http) {

    $scope.loadData = function() {
        $http.get('data.json').then(function(response) {
            console.log('Status: ' + response.status);
            console.log('Type: ' + response.headers('content-type'));
            console.log('Length: ' + response.headers('content-length'));
            $scope.products = response.data;
        });
    };
    $scope.loadDataXML = function() {
        var config = {
            transformResponse: function(data, headers) {
                if (headers('content-type') === 'application/xml' && angular.isString(data)) {
                    var products = [];
                    var productElems = angular.element(data.trim()).find('product');
                    for (var i = 0; i < productElems.length; i++) {
                        var product = productElems.eq(i);
                        products.push({
                            name: product.attr('name'),
                            category: product.attr('category'),
                            price: product.attr('price')
                        });
                    }
                    return products;
                } else {
                    return data;
                }
            }
        };

        $http.get('data.xml', config).success(function(data) {
            $scope.products = data;
        });
    };
    $scope.sendData = function() {
        var config = {
            headers: {
                'content-type': 'application/xml'
            },
            transformRequest: function(data, headers) {
                var rootElem = angular.element('<xml>');
                for (var i = 0; i < data.length; i++) {
                    var prodElem = angular.element('<product>');
                    prodElem.attr('name', data[i].name);
                    prodElem.attr('category', data[i].category);
                    prodElem.attr('price', data[i].price);
                    rootElem.append(prodElem);
                }
                rootElem.children().wrap('<products>');
                return rootElem.html();
            }
        }
        $http.post('/#/ajax', $scope.products, config);
    };
});