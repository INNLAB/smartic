angular.module("app")
.controller("horarioCtrl", ["$scope", '$http', function($scope, $http) {
	$scope.salones = [
		{
			nombre: 'Salon 1'
		},
		{
			nombre: 'Salon 2'
		},
		{
			nombre: 'Salon 3'
		},
		{
			nombre: 'Salon 4'
		},
		{
			nombre: 'Salon 5'
		},
		{
			nombre: 'Salon 6'
		},
		{
			nombre: 'Salon 7'
		}
	];
	$scope.horas = [
		{
			hora: '6:15',
			numero: '1'
		},
		{
			hora: '7:15',
			numero: '2'
		},
		{
			hora: '8:15',
			numero: '3'
		},
		{
			hora: '9:15',
			numero: '4'
		},
		{
			hora: '10:15',
			numero: '5'
		},
		{
			hora: '11:15',
			numero: '6'
		}
	];
	$scope.materias = [
		'Matematicas',
		'Castellano',
		'Ingles',
		'Deporte',
		'Fisica',
		'C. Sociales',
		'C. Naturales'
	];
	$scope.profesores = [
		'Jorge Toloza',
		'Paula Cuello',
		'Ruby Ardila',
		'Leo Villa',
	];
	$scope.grupos = [
		'6A',
		'6B',
		'6C',
		'7A',
		'7B',
		'7C',
		'8A'
	];
}]);