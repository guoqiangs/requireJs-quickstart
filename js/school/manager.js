/**
 * Created by shangguoqiang on 2015/12/31.
 */

define(["require","js/school/student", "js/school/class"], function(require,student,clz){
    console.log("school-manager")

    //生成相对于模块的URL地址
    var jsUrl = require.toUrl("./class.js");
    console.log(jsUrl);

    //为了可以在define()内部使用诸如require("./relative/name")的调用以正确解析相对名称，记得将"require"本身作为一个依赖注入到模块中
    var classModule = require("./class"); // require("js/school/class");
    console.log(classModule.classID);

    return {
        addNewStudent: function(name, gender){
            clz.addToClass(student.createStudent(name, gender));
        },
        getMyClassSize: function(){
            return clz.getClassSize();
        }
    };
});

