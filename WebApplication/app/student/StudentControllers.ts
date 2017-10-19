module App {
    export class Student {

        public id: string;
        public name: string;
        public phone: string;

       
    }

    class StudentController {

        student: Student;
        information: string;
        studentService: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in student controller");
        }
      
        add(): void {

            var self = this;
            let success = function (response) {
                console.log(response);
                self.reset();
            };
            let error = function (errorReason) {
                console.log(errorReason);
            };
            this.studentService.save(self.student).then(success, error);
           
        }

        reset(): void {
            this.student = new Student();
        }
    }

    angular.module('app').controller("StudentController", (StudentController) as any);


    class StudentsController {

        students: Student[];
        studentService: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.studentService = studentService;
            let self = this;

            self.students = [];
            let success = function (successResponse) {
                self.students = successResponse.data;
                console.log(self.students);
            };

            let error = function (errorResponse) {
                alert(errorResponse);
            };
            this.studentService.get().then(success, error);
         
        }
    }

    angular.module('app').controller("StudentsController", (StudentsController) as any);
}