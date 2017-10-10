module App {
   export  class Student {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + " " + this.phone;
        }
    }

    class StudentController {

        student: Student;
        information: string;

        studentService: StudentService;

        constructor(studentService: StudentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }


        disply(): void {

            this.information = this.student.getInfo();

        }
        add(): void {
            this.studentService.students.push(this.student);
            this.student = new Student();
        }

        reset(): void {
            this.student = new Student();
        }
    }

    // var app = angular.module('app', []);
    angular.module('app').controller("StudentController", (StudentController) as any);

    class StudentsController {
        students: Student[];
        studentService: StudentService;
        constructor(studentService: StudentService) {
            this.studentService = studentService;
            this.students = this.studentService.students ;
            console.log("I am in students Controller",  this.students);
        }
    }

    angular.module('app').controller("StudentsController", (StudentsController) as any);
}