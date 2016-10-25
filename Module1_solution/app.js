(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.food = "";
        $scope.textMessage = "";
        $scope.myStyle = new Object();

        function SplitString (string) {
            var listOf = $scope.food.split(",");
            console.log(listOf);
            var result = [];
            for (var i = 0; i < listOf.length; i++)
            {
                if(listOf[i] != false)
                {
                    result.push(listOf[i]);
                }
            }
            return result;
        }


        $scope.QuantifyFood = function () {
            var listOfFood = SplitString($scope.food);
           
            if(listOfFood.length === 0)
            {
                $scope.textMessage = "Please enter data first";
                $scope.myStyle = {
                    color: '#FF0000',
                    'border': '1px solid #FF0000',
                    'margin-right': '70%'
                }
                
               
            }
            else if(listOfFood.length <= 3) {
                $scope.textMessage = "Enjoy!";
                $scope.myStyle = {
                    color: '#008000',
                    'border': '1px solid #008000',
                    'margin-right': '70%'
                }
                
            }
            else {
                $scope.textMessage = "Too much!";
                 $scope.myStyle = {
                    color: '#008000',
                    'border': '1px solid #008000',
                    'margin-right': '70%'
                }
                
            }
        }
        
    }

})();
