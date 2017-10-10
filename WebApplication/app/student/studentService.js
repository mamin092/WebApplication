var App;
(function (App) {
    var StudentService = /** @class */ (function () {
        function StudentService() {
            this.student = [];
            console.log('initiating student service', this.student);
        }
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('App').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=studentService.js.map