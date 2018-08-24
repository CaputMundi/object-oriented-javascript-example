class Employee {
  constructor (name, hireDate, salary) {
    this.name = name;
    this.hireDate = hireDate;
    this.salary = salary;
  }

  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}

 class Manager extends Employee {
     constructor (name,hireDate,salary, descriptionOfJob){
        super(name,hireDate,salary);
        this.descriptionOfJob  = descriptionOfJob;
     }
     jobDescription() {
        console.log(this.name.toUpperCase() + " was hired on " + this.hireDate + " his salary is " + this.salary + " annually, to make sure everyone does their job." )
}
 }
   
 class Designer extends Employee {
    constructor (name,hireDate, salary,experience,){
       super(name,hireDate, salary);
       this.experience;
    }
    yearsExperience(){
        console.log(
            this.name.toUpperCase() +  " was hired on " + this.hireDate + " her salary is " + this.salary + " annually, she designs CSS Stylsheets."
        )
    }
 }
 
class SalesAssociate extends Employee {
        constructor (name,hireDate, salary,degreesCompleted,){
           super(name,hireDate,salary);
           this.degrees;
        }
        degreesCompleted() {
            console.log(this.name.toUpperCase() + " was hired on " + this.hireDate + " his salary is " + this.salary + " annually, he drives sales and makes us MONEY!" )
    }
}
    let yourManager = new Manager ("John", "1/1/2018","100k")

    yourManager.jobDescription();

    let theDesigner = new Designer (
    "Ann", "2/2/2018","90k"
    )
    
    theDesigner.yearsExperience();
  
    let theSales = new SalesAssociate (
        "Charles", "2/1/2018","115k")

    theSales.degreesCompleted();