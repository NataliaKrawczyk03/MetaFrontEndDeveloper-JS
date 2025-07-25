// JavaScript OOP Practice – Person & Worker classes
// Task from Meta Front-end Developer course
// Topics: classes, inheritance, default parameters, methods, instantiation


// Task 1: Code a Person class
// Define the Person class
class Person
{
    // Add a constructor with default parameters
    constructor(name = "Tom", age = 20, energy = 100)
    {
        this.name = name
        this.age = age
        this.energy = energy
    }
    // Add the sleep() method
    sleep()
    {
        this.energy += 10
    }
    // Add the doSomethingFun() method
    doSomethingFun()
    {
        this.energy = this.energy - 10
    }

}

// Task 2: Code a Worker class
// Define the Worker class that extends Person
class Worker extends Person
{
    // Add a constructor with additional parameters
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10)
    {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    // Add the goToWork() method
    goToWork()
    {
        this.xp += 10
    }
}

// Task 3: Code an intern object, run methods
function intern()
{
    // Instantiate the Worker class with the intern properties
    const intern = new Worker("Bob", 21, 110, 0, 10)
    // Call the goToWork() method
    intern.goToWork()
    // Return the intern object
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    // Instantiate the Worker class with the manager properties
    const manager = new Worker("Alice", 20, 120, 100, 30)
    // Call the doSomethingFun() method
    manager.doSomethingFun()
    // Return the manager object
    return manager
}

console.log(intern());
console.log(manager());
