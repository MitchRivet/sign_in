signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.attendance = [{ name: "Satan", here: false}, {name: "Steven Brule", here: false}];

    factory.markAttendance = function () {
        factory.attendance.push({ name: factory.studentName, here: false});

    };

    return factory;
});
