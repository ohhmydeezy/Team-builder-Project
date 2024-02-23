// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

}
function checkName(name) {
    if (typeof name !== "string" || !name.trim().length) {
        return "Please enter a valid name";
    }
    return true;
}
function checkId(id) {
    if (typeof id !== "number" || isNaN(id) || id < 0) {
        return "Please enter a valid id";
    }
    return true;
}
function checkEmail(email) {
    if (typeof email !== "string" || !email.trim().length) {
        return "Please enter a valid email";
    }
    return true;
}
function checkRole(role) {
    if (typeof role !== "string" || !role.trim().length) {
        return "Please enter a valid role";
    }
    return true;
}

module.exports = Employee;