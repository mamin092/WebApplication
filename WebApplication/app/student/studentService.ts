module App {
   export  class StudentService {
        students: Student [];
        constructor() {
            this.students = [];
            console.log('initiating student service',this.students);

        }
    }

    angular.module('App').service("StudentService", StudentService);
}