var App;
(function (App) {
    var StudentService = /** @class */ (function () {
        function StudentService(http, q) {
            this.students = [];
            this.http = http;
            this.q = q;
        }
        StudentService.prototype.save = function (student) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:6310/api/student", student).then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.search = function (request) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:6310/api/StudentQuery", request).then(f1, f2);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map