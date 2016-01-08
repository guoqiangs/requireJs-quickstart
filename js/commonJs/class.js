/**
 * Created by shangguoqiang on 2015/12/31.
 */

define(function(require, exports, module) {
        console.log("commonjs-class")
        var allStudents = [];
        exports.classID = "001";
        exports.department = "computer";
        exports.addToClass = function (student) {
            allStudents.push(student);
        };
        exports.getClassSize = function () {
            return allStudents.length;
        }
    }
);