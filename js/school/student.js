/**
 * Created by shangguoqiang on 2015/12/31.
 */
define(function(){
    console.log("school-student")
    return {
        createStudent: function(name, gender){
            return {
                name: name,
                gender: gender
            };
        }
    };
});