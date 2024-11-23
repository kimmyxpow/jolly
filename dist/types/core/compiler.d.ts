/**
 * 🚀 JollyCompiler Class
 * This is where the magic happens! 🎩✨
 * The JollyCompiler takes your funky Jolly code and turns it into plain ol' JavaScript.
 * It's like having a translator that speaks "fun" but outputs "serious". 😄
 */
export declare class JollyCompiler {
    private reservedKeywords;
    /**
     * 🔧 Constructor
     * Sets up the compiler with a list of reserved Jolly keywords.
     * These keywords are off-limits for variable names, functions, or properties.
     */
    constructor();
    /**
     * 🛠️ compile(input, fileName): string
     * This method takes your Jolly code and compiles it into JavaScript.
     * It's a full-service shop: it handles keywords, validates their use, and even respects your comments! 😉
     *
     * @param input - The raw Jolly code (the fun stuff).
     * @param fileName - The name of the file being compiled (for error reporting if things go sideways 🚨).
     * @returns The JavaScript code as a string, ready to run. 💻
     */
    compile(input: string, fileName: string): string;
    /**
     * 🚦 validateLine(line, fileName, lineNumber): void
     * Validates a single line of code for reserved keyword misuse.
     * This is the gatekeeper 👮 of the Jolly world, making sure you don't misuse keywords like "fun" or "lock".
     *
     * @param line - The line of code to validate.
     * @param fileName - The file where the line is located (for error messages).
     * @param lineNumber - The line number in the file (for better debugging).
     */
    private validateLine;
}
