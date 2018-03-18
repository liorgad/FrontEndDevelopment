//@ts-check

app.controller("ctrl",function($scope){
    
    // Example simple array
    // $scope.numArr=[1,2,3,4,5];
    // $scope.add = function(x){
    //     $scope.numArr.push(x);
    // };

    // This ctor should later be a service
    function Car(brand,model,year,km,testDate){
        this.brand= brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.testDate = new Date(testDate);
        this.kmPerYear = function(){
            return Math.round(this.km/ (new Date().getFullYear() - this.year));
        };        
    }

    // Testing the ctor
    // var car1 = new Car("Toyota","Corola",2012,130000);
    // alert(JSON.stringify(car1));
    // alert(car1.kmPerYear());

    var car1 = new Car("Toyota","Corola",2012,130000,'01-30-2019');
    var car2 = new Car("Honda","Civic",2002,280000,'05-23-2019');
    var car3 = new Car("Ford","Mondeo",2008,190000,'02-01-2019');
    

    //putting an object array on the scope
    $scope.cars = [car1,car2,car3];

    $scope.addCar = function(brand,model,year,km,testDate){
        var c = new Car(brand,model,year,km,testDate);
        $scope.cars.push(c);
    }

    //my own filter function, when i put ng-model in the html it is added automatically to the scope
    $scope.searchText= "";
    $scope.filterCar = function(car){

        // return (!$scope.seachText) || (car.brand.includes($scope.searchText) || car.model.includes($scope.searchText));

        return (car.brand.toLowerCase().includes($scope.searchText) || car.model.toLowerCase().includes($scope.searchText));
    }

    $scope.sortProp="";
    $scope.changeSort = function(propName){
        $scope.sortProp = propName;
    }

});