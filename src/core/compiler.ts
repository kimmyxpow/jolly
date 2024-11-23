import { keywordMapping } from '~/core/keywords';
import { CompilerError } from '~/core/errors';

/**
 * 🚀 JollyCompiler Class
 * This is where the magic happens! 🎩✨
 * The JollyCompiler takes your funky Jolly code and turns it into plain ol' JavaScript.
 * It's like having a translator that speaks "fun" but outputs "serious". 😄
 */
export class JollyCompiler {
    private reservedKeywords: string[];

    /**
     * 🔧 Constructor
     * Sets up the compiler with a list of reserved Jolly keywords.
     * These keywords are off-limits for variable names, functions, or properties.
     */
    constructor() {
        this.reservedKeywords = Object.keys(keywordMapping);
    }

    /**
     * 🛠️ compile(input, fileName): string
     * This method takes your Jolly code and compiles it into JavaScript.
     * It's a full-service shop: it handles keywords, validates their use, and even respects your comments! 😉
     *
     * @param input - The raw Jolly code (the fun stuff).
     * @param fileName - The name of the file being compiled (for error reporting if things go sideways 🚨).
     * @returns The JavaScript code as a string, ready to run. 💻
     */
    compile(input: string, fileName: string): string {
        const lines = input.split('\n');
        const compiledLines: string[] = [];
        let inMultiLineComment = false;

        lines.forEach((line, lineNumber) => {
            if (!inMultiLineComment) {
                this.validateLine(line, fileName, lineNumber + 1);
            }

            const singleLineCommentIndex = line.indexOf('//');
            const multiLineCommentStartIndex = line.indexOf('/*');
            const multiLineCommentEndIndex = line.indexOf('*/');

            let codePart = line;
            let commentPart = '';

            if (inMultiLineComment) {
                if (multiLineCommentEndIndex !== -1) {
                    inMultiLineComment = false;
                    commentPart = line.slice(0, multiLineCommentEndIndex + 2);
                    codePart = line.slice(multiLineCommentEndIndex + 2);
                } else {
                    compiledLines.push(line);
                    return;
                }
            } else {
                if (multiLineCommentStartIndex !== -1 && multiLineCommentEndIndex === -1) {
                    inMultiLineComment = true;
                    commentPart = line.slice(multiLineCommentStartIndex);
                    codePart = line.slice(0, multiLineCommentStartIndex);
                } else if (multiLineCommentStartIndex !== -1 && multiLineCommentEndIndex !== -1) {
                    commentPart = line.slice(
                        multiLineCommentStartIndex,
                        multiLineCommentEndIndex + 2
                    );
                    codePart =
                        line.slice(0, multiLineCommentStartIndex) +
                        line.slice(multiLineCommentEndIndex + 2);
                } else if (singleLineCommentIndex !== -1) {
                    codePart = line.slice(0, singleLineCommentIndex);
                    commentPart = line.slice(singleLineCommentIndex);
                }
            }

            const regex = new RegExp(`\\b(${Object.keys(keywordMapping).join('|')})\\b`, 'g');
            const compiledCodePart = codePart.replace(
                regex,
                (match) => keywordMapping[match] || match
            );

            compiledLines.push(compiledCodePart + commentPart);
        });

        return compiledLines.join('\n');
    }

    /**
     * 🚦 validateLine(line, fileName, lineNumber): void
     * Validates a single line of code for reserved keyword misuse.
     * This is the gatekeeper 👮 of the Jolly world, making sure you don't misuse keywords like "fun" or "lock".
     *
     * @param line - The line of code to validate.
     * @param fileName - The file where the line is located (for error messages).
     * @param lineNumber - The line number in the file (for better debugging).
     */
    private validateLine(line: string, fileName: string, lineNumber: number): void {
        const trimmedLine = line.trim();

        if (!trimmedLine || trimmedLine.startsWith('//')) return;

        const validContexts: Record<string, RegExp> = {
            when: /^\s*when\s*\(/,
            maybe: /^\s*\}\s*maybe\s*\(/,
            meh: /^\s*\}\s*meh\s*\{/,
            loopy: /^\s*loopy\s*\(/,
            aslong: /^\s*aslong\s*\(/,
        };

        for (const [keyword, regex] of Object.entries(validContexts)) {
            if (regex.test(trimmedLine)) return;
        }

        const reservedAsVariableRegex = new RegExp(
            `\\b(${this.reservedKeywords.join('|')})\\b\\s*=`
        );
        const reservedAsFunctionRegex = new RegExp(
            `\\b(${this.reservedKeywords.join('|')})\\b\\s*\\(`
        );
        const reservedAsPropertyRegex = new RegExp(`\\.(${this.reservedKeywords.join('|')})\\b`);
        const reservedInObjectLiteralRegex = new RegExp(
            `\\b(${this.reservedKeywords.join('|')})\\b\\s*:`
        );

        const variableMatch = reservedAsVariableRegex.exec(line);
        if (variableMatch) {
            throw new CompilerError(
                `The keyword "${variableMatch[1]}" cannot be used as a variable name.`,
                fileName,
                lineNumber,
                line,
                variableMatch[1]
            );
        }

        const functionMatch = reservedAsFunctionRegex.exec(line);
        if (functionMatch) {
            throw new CompilerError(
                `The keyword "${functionMatch[1]}" cannot be used as a function name.`,
                fileName,
                lineNumber,
                line,
                functionMatch[1]
            );
        }

        const propertyMatch = reservedAsPropertyRegex.exec(line);
        if (propertyMatch) {
            throw new CompilerError(
                `The keyword "${propertyMatch[1]}" cannot be used as a property name.`,
                fileName,
                lineNumber,
                line,
                propertyMatch[1]
            );
        }

        const objectLiteralMatch = reservedInObjectLiteralRegex.exec(line);
        if (objectLiteralMatch) {
            throw new CompilerError(
                `The keyword "${objectLiteralMatch[1]}" cannot be used as a property name in an object literal.`,
                fileName,
                lineNumber,
                line,
                objectLiteralMatch[1]
            );
        }
    }
}
