signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.attendance = [{ name: "Satan", id: 0, here: false}, {name: "Steven Brule", id: 1, here: false}, {name: "Danny Boy", id: 2, here: true}];

    factory.addStudent = function () {
        factory.attendance.push({ name: factory.studentName, id: factory.attendance.length + 1, here: false});
    };

    factory.markHere = function (name, id) {
        factory.attendance[id] = ({ name: name, id: id, here: true});

    };

    factory.markNotHere = function (name, id) {
        factory.attendance[id] = ({ name: name, id: id, here: false});
    };

    return factory;
});
