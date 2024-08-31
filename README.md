Hello this is my first assignment of Digistar Class Hacker Backend -4
Hard Skill Day 1: Introduction to Node Package Manager

npm Exercise: Publish to npm Package

In this exercise, you will learn how to publish your own package to the npm registry. Publishing your package allows others to use your code and contributes to the open-source community. It’s a great way to share your projects, libraries, and tools with a wider audience.

Objectives
By the end of this exercise, you will be able to:

Create a simple Node.js module.
Prepare the module for publishing.
Publish the module to the npm registry.
Manage and update your published package.
Prerequisites
Before you start, make sure you have:

A working Node.js and npm installation.
An npm account. If you don’t have one, you can create it by running npm adduser in your terminal.
Steps to Publish Your Package
Create Your Module: Start by creating a new directory for your module, then create the JavaScript file containing your module's code.

Set Up package.json: Use npm init to create a package.json file that contains metadata about your package, such as its name, version, and description.

Write Your Code: Implement the functionality of your module and export it using module.exports.

Login to npm: Make sure you are logged in to your npm account using npm login.

Publish Your Package: Run npm publish to publish your package to the npm registry.

Update Your Package: If you make changes to your module, update the version in package.json and run npm publish again to publish the updated version.

Example Code
In this example, I'll create a module that provides simple arithmetic operations.

Step 1: Set Up Project
Initialize project (if not already done):
mkdir arithmetic-cli
cd arithmetic-cli
npm init -y

2. Install the commander library:
npm install commander

3. Step 3: Create the Arithmetic Module
Create a file named arithmetic.js for the module that provides the arithmetic operations.

Step 4: Create the Command-Line Interface
Create a file named cli.js which will use commander to parse command-line arguments and perform the arithmetic operations.

Running the CLI
To run CLI, use the following commands in terminal:

1. Add two numbers:
node cli.js add 5 3
Output: Result: 8

2. Subtract two numbers:
node cli.js subtract 5 3
Output: Result: 2

3. Multiply two numbers:
node cli.js multiply 5 3
Output: Result: 15

4. Divide two numbers:
node cli.js divide 6 3
Output: Result: 2

5. Handle division by zero:
node cli.js divide 5 0
Output: Cannot divide by zero

Explanation
arithmetic.js: Defines and exports basic arithmetic functions.
cli.js: Uses commander to set up a command-line interface. It defines commands for each arithmetic operation and uses the functions from arithmetic.js to perform the calculations based on user input.
program.parse(process.argv): Parses command-line arguments and executes the appropriate command.
This setup creates a simple CLI application for performing arithmetic operations, showcasing how to use commander to handle command-line arguments and interact with custom module.
