const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function currentSalary(employees){
    for(employee of employees){
        const salary = ((employee.starting*12) + (employee.increment*employee.experience)) / 12;
        console.log("Name:", employee.name, "||", "Salary: ", salary);
    }
}

currentSalary(employees);