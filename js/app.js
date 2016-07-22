/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);


var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function($scope) {

 $scope.foods = [
  'Apple',
  'Apricot',
  'Banana',
  'Artichoke',
  'Arugula',
  'Asparagus'
  ];

  $scope.veggies = [];

  $scope.frooties = [];

  $scope.default = {'background-color':'grey'};
  $scope.wrong = {'background-color': 'red'};

$scope.right = function(index){
  $scope.veggies.push($scope.foods[index]);
  $scope.foods.splice(index, 1);
  if ($scope.foods.length === 0) {
    $scope.done();
  }
}

$scope.left = function(index){
  $scope.frooties.push($scope.foods[index]);
  $scope.foods.splice(index, 1);
  if ($scope.foods.length === 0) {
    $scope.done();
  }
};

$scope.centerright = function(index) {
  $scope.foods.push($scope.frooties[index]);
  $scope.frooties.splice(index, 1);
}

$scope.centerleft = function(index) {
  $scope.foods.push($scope.veggies[index]);
  $scope.veggies.splice(index, 1);
}

$scope.done = function() {
  console.log('Im Running!');
    angular.forEach($scope.frooties, function(fruit){
      if(fruits.indexOf(fruit) === -1) {
        console.log(fruit);
        console.log($scope.frooties.indexOf(fruit));
        var index = ($scope.frooties.indexOf(fruit));
        console.log(index);
        $scope.default = 'red';
        console.log($scope.default);
        // $scope.frooties(index)

      } else {
        angular.forEach($scope.veggies, function(vegg){
          if(vegetables.indexOf(vegg) === -1) {
            console.log(vegg);
            console.log(vegetables[vegg]);
            console.log($scope.veggies.indexOf(vegg));


          }
        })
      }
    })
}

}]);
