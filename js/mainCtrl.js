var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope){
	$scope.friends = ['Alex', 'Jessica', 'Melissa', 'Ryan'];
});