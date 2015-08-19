angular.module('myApp', []).controller('TodosController', ['$scope', function($scope){

    $scope.todos = [
    {
        'name': 'Learn angular',
        'done': true
    },
    {
        'name': 'Install java',
        'done': false
    },
    {
        'name': 'Uninstall ruby',
        'done': false
    }
        ];

	$scope.addTodo = function() {
        if ($scope.todoName === "") {
            return false;
        }

        $scope.todos.push({
            'name': $scope.todoName,
            'done': false
        });

        $scope.todoName = '';
	};
}]);