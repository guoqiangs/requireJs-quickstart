/**
 * Created by shangguoqiang on 2015/12/31.
 */
define(function(require, exports, module){
    console.log("commonjs-student")
    exports.createStudent = function(name, gender){
        return {
            name: name,
            gender: gender
        };
    }
});