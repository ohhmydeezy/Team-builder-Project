const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team member's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the team member's role?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
        .then(function ({ name, id, email, role }) {
            if (role === "Manager") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "What is the manager's office number?"
                    }
                ])
                    .then(function ({ officeNumber }) {
                        return new Manager(name, id, email, officeNumber);
                    });
            }
            else if (role === "Engineer") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's github username?"
                    }
                ])
                    .then(function ({ github }) {
                        return new Engineer(name, id, email, github);
                    });
            }
            else if (role === "Intern") {
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "What is the intern's school?"
                    }
                ])
                    .then(function ({ school }) {
                        return new Intern(name, id, email, school);
                    });
            }
        });
}

const teamMembers = [];

const addMember = () => {
    promptUser()
        .then(function (member) {
            teamMembers.push(member);
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "confirm",
                    message: "Would you like to add another team member?"
                }
            ])
                .then(function ({ confirm }) {
                    if (confirm) {
                        addMember();
                    }
                    else {
                        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
                    }
                });
        });
}

addMember();

const writeToFile = (fileName, data) => {
    fs.writeFileSync()
}

const init = () => {
    promptUser()
        .then((answers) => console.log(answers))
        .catch((err) => console.error(err));
}

init();