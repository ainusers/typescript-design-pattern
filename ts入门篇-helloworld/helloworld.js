// 类： 学生
var Student = /** @class */ (function () {
    function Student(name, extra) {
        this.name = name;
        this.extra = extra;
        this.fullName = name + " " + extra;
    }
    Student.prototype.helloworld = function (who, say) {
        return who + " say ：" + say;
    };
    return Student;
}());
// init初始化student
var student = new Student("ty", "emmm....");
document.body.innerHTML = helloworld(student);
// 接口形参
function helloworld(person) {
    return "Hello, " + person.name + " " + person.extra + " " + student.helloworld("ty", 666);
}
