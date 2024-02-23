// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    
}

function checkOfficeNumber(officeNumber) {
    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
        return "Please enter a valid office number";
    }
    return true;
}
module.exports = Manager;