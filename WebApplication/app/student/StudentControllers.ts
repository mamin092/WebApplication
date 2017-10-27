﻿module App {

    export class Student {
         id: string;
         name: string;
         phone: string;
    }

    export class StudentRequestModel {
         name: string;
         phone: string;
         orderBy: string;
         isAscending: boolean;
        page:number;
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
                console.error(errorReason);
            };

            this.studentService.save(self.student).then(success, error);

        }

        reset(): void {
            this.student = new Student();
        }
    }

    angular.module('app').controller("StudentController", (StudentController) as any);


    class StudentsController {

        searchRequest: StudentRequestModel;
        students: Student[];
        studentService: StudentService;

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            this.studentService = studentService;
            let self = this;
            self.students = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.page = 1;


            let success = function (response) {
                self.students = response.data;
                console.log(self.students);
            };

            let error = function (errorReason) {
                alert(errorReason);
            }

            console.log('i am in Students controller constructor');
            this.studentService.search(self.searchRequest).then(success, error);

        }

        search() {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.students = response.data;
            };

            let error = function (errorReason) {
                console.error(errorReason);
            };

            this.studentService.search(self.searchRequest).then(success, error);
        }

        sort(property: string) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        }

        next() {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        }

        previous() {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        }
    }

    angular.module('app').controller("StudentsController", (StudentsController) as any);
}