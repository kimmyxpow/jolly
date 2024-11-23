/**
 * 🚨 Compiler Error Class
 * This file handles custom error messages for the Jolly compiler.
 * If something goes wrong, this class makes sure you know *exactly* what happened.
 */
export declare class CompilerError extends Error {
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
    constructor(message: string, fileName: string, lineNumber: number, codeLine: string, keyword: string);
}
