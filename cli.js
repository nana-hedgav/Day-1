// cli.js

const { Command } = require('commander');
const arithmetic = require('./arithmetic');

// Initialize commander
const program = new Command();

// Define the CLI commands
program
    .version('1.0.0')
    .description('Perform simple arithmetic operations');

program
    .command('add <a> <b>')
    .description('Add two numbers')
    .action((a, b) => {
        const result = arithmetic.add(parseFloat(a), parseFloat(b));
        console.log(`Result: ${result}`);
    });

program
    .command('subtract <a> <b>')
    .description('Subtract two numbers')
    .action((a, b) => {
        const result = arithmetic.subtract(parseFloat(a), parseFloat(b));
        console.log(`Result: ${result}`);
    });

program
    .command('multiply <a> <b>')
    .description('Multiply two numbers')
    .action((a, b) => {
        const result = arithmetic.multiply(parseFloat(a), parseFloat(b));
        console.log(`Result: ${result}`);
    });

program
    .command('divide <a> <b>')
    .description('Divide two numbers')
    .action((a, b) => {
        try {
            const result = arithmetic.divide(parseFloat(a), parseFloat(b));
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    });

// Parse command-line arguments
program.parse(process.argv);