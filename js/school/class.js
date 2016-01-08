/**
 * Created by shangguoqiang on 2015/12/31.
 */
define(function() {
        console.log("school-class")
        var allStudents = [];
        return {
            classID: "001",
            department: "computer",
            addToClass: function(student) {
                allStudents.push(student);
            },
            getClassSize: function() {
                return allStudents.length;
            }
        };
    }
);