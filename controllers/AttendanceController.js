signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, AttendanceFactory) {
    $scope.attendance = AttendanceFactory.attendance;
    $scope.AttendanceFactory = AttendanceFactory;
    
});
