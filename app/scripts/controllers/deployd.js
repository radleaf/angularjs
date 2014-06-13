'use strict';

angular.module('yeomanApp')
        .constant("ActiveClass", "btn-primary")
        .controller('DeploydCtrl', function($scope,ActiveClass) {
             $scope.data = {
                products: [
                    {name: "Product #1", description: "A product",
                        category: "Category #1", price: 100},
                    {name: "Product #2", description: "A product",
                        category: "Category #1", price: 110},
                    {name: "Product #3", description: "A product",
                        category: "Category #2", price: 210},
                    {name: "Product #4", description: "A product",
                        category: "Category #3", price: 202}]
            };
            var selectedCategory = null;

            $scope.selectCategory = function(newCategory) {
                selectedCategory = newCategory;
            };

            $scope.categoryFilterFn = function(product) {
                return selectedCategory === null ||
                        product.category === selectedCategory;
            };
            $scope.getCategoryClass = function (category) {
            return selectedCategory === category ? ActiveClass : "";
        };
           
        }).filter("unique", function() {
    return function(data, propertyName) {
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var results = [];
            var keys = {};
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }
            return results;
        } else {
            return data;
        }
    };
});
