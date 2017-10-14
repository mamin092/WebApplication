module App {
    class HomeController {

        values: string[];

        static $inject = ["StudentService"];
        constructor(studentService: StudentService) {
            let self = this;
            console.log("I am in home controller");
            this.now = new Date().toString();
            studentService.get()
                .then(
                function (success) {
                    console.log(success);
                    self.values = success.data;
                },
                function (error) {
                    console.log(error);
                    alert(error);

                }
                );
        }

        now: string;
    }

    angular.module("app").controller("HomeController", (HomeController) as any);
}