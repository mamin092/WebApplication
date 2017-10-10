var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.name + " " + this.phone;
        };
        return Student;
    }());
    var StudentController = /** @class */ (function () {
        function StudentController() {
        }
        StudentController.prototype.getStudentInfo = function () {
            var s = new Student();
            s.name = "Rushda";
            s.phone = "4337";
            var info = s.getInfo();
            console.log(info);
        };
        return StudentController;
    }());
})(App || (App = {}));
//# sourceMappingURL=app.js.map