var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentController = /** @class */ (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in student controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (successResporse) {
                console.log(successResporse);
                self.reset();
            };
            var error = function (errorResponse) {
                console.log(errorResponse);
            };
            this.studentService.save(self.student).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        StudentController.$inject = ["StudentService"];
        return StudentController;
    }());
    angular.module('app').controller("StudentController", (StudentController));
    var StudentsController = /** @class */ (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            var success = function (successResponse) {
                self.students = successResponse.data;
                console.log(self.students);
            };
            var error = function (errorResponse) {
                alert(errorResponse);
            };
            this.studentService.get().then(success, error);
        }
        StudentsController.$inject = ["StudentService"];
        return StudentsController;
    }());
    angular.module('app').controller("StudentsController", (StudentsController));
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map