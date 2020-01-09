// 类： 学生
class Student {
    fullName: string;
    constructor(public name: string, public extra: string) {
        this.fullName = name + " " + extra;
    }
    helloworld<T>(who: T,say: T){
        return who + " say ：" + say;
    }
}
// 接口： 人
interface Person {
    name: string;
    extra: string;
}

// init初始化student
let student = new Student("ty", "emmm....");
document.body.innerHTML = helloworld(student);

// 接口形参
function helloworld(person: Person){
    return "Hello, " + person.name + " " + person.extra + " " + student.helloworld<string | number>("ty",666);
}

