import chalk from 'chalk';

/**
 * 🚨 Compiler Error Class
 * This file handles custom error messages for the Jolly compiler.
 * If something goes wrong, this class makes sure you know *exactly* what happened.
 */
export class CompilerError extends Error {
    /**
     * 🛑 Constructor for CompilerError
     * Creates a super-detailed error message with file info, line number, and a helpful hint. 🕵️‍♂️
     *
     * @param message - A friendly description of what went wrong. 😅
     * @param fileName - The name of the file where the error occurred. 📂
     * @param lineNumber - The line number where the error was found. 🔢
     * @param codeLine - The actual line of code that caused the problem. 📝
     * @param keyword - The keyword that caused the error. 🔑
     */
    constructor(
        message: string,
        fileName: string,
        lineNumber: number,
        codeLine: string,
        keyword: string
    ) {
        const highlightedKeyword = chalk.red.bold(keyword);
        const highlightedCode = codeLine.replace(
            new RegExp(`\\b${keyword}\\b`, 'g'),
            highlightedKeyword
        );

        const detailedMessage = `
${chalk.red('Compiler Error')}: ${message}
File: ${chalk.cyan(fileName)}
Line: ${chalk.yellow(lineNumber)}

Problematic Code:
  ${highlightedCode}

Hint: Ensure the keyword "${chalk.blue(keyword)}" is used in the correct context.
`;

        super(detailedMessage);
        this.name = 'CompilerError';
    }
}
