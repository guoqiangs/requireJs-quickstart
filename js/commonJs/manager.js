/**
 * Created by shangguoqiang on 2015/12/31.
 */
define(function(require, exports, module){
    console.log("commonjs-manager");
    var clz = require("js/commonjs/class");
    var student = require("js/commonjs/student");

    exports.addNewStudent = function(name, gender){
        clz.addToClass(student.createStudent(name, gender));
    };
    exports.getMyClassSize = function(){
        return clz.getClassSize();
    };
});

