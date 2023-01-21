// Write your solution in this file!
const employee = {
    name: "nomer",
    streetAddress: "value"
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
    //take in 3 arguments: employee Object, a key, a value
    //shouldn't mutate employee;return new Object w/updated value for key passed in.
    //Hint: use spread operator!
    return{
        ...employee,
        [streetAddress]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee[streetAddress]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    delete employee.name;
    return employee;
}