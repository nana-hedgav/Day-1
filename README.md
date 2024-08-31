Hello this is my first assignment of Digistar Class Hacker Backend -4
Hard Skill Day 1: Introduction to Node Package Manager

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
