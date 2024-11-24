import { keywordMapping } from '~/core/keywords';
import { CompilerError } from '~/core/errors';

/**
 * 🚀 JollyCompiler Class
 * The JollyCompiler translates Jolly code into JavaScript. 🎩✨
 */
export class JollyCompiler {
    private reservedKeywords: string[];

    constructor() {
        this.reservedKeywords = Object.keys(keywordMapping);
    }

    /**
     * 🛠️ Compile Jolly code to JavaScript
     *
     * @param input - The raw Jolly code.
     * @param fileName - The file name for error reporting.
     * @returns The compiled JavaScript code.
     */
    compile(input: string, fileName: string): string {
        const lines = input.split('\n');
        const compiledLines: string[] = [];
        const blockStack: string[] = [];
        let inMultiLineComment = false;

        for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
            let line = lines[lineNumber];
            const trimmedLine = line.trim();

            if (!inMultiLineComment) this.validateLine(trimmedLine, fileName, lineNumber + 1, blockStack);

            const [codePart, commentPart, updatedMultiLineState] = this.extractCodeAndComment(line, inMultiLineComment);
            inMultiLineComment = updatedMultiLineState;

            if (inMultiLineComment && !commentPart) {
                compiledLines.push(line);
                continue;
            }

            if (trimmedLine === '}') blockStack.pop();
            else if (this.isBlockOpener(trimmedLine)) {
                const blockOpener = this.getBlockOpener(trimmedLine);
                if (blockOpener) blockStack.push(blockOpener);
            }

            const processedCode = this.processCode(codePart);
            compiledLines.push(processedCode + commentPart);
        }

        return compiledLines.join('\n');
    }

    /**
     * 🚦 Validate a single line of Jolly code.
     *
     * @param line - The line of code to validate.
     * @param fileName - The name of the file (for error reporting).
     * @param lineNumber - The line number in the file.
     * @param blockStack - Tracks the current block context.
     */
    private validateLine(line: string, fileName: string, lineNumber: number, blockStack: string[]): void {
        if (!line || line.startsWith('//')) return;

        const lineWithoutStrings = this.removeStringLiterals(line);

        for (const [
            keyword,
            { validContext, requiredParentContext, isBlockOpener, isDependentKeyword },
        ] of Object.entries(keywordMapping)) {
            if (validContext && validContext.test(lineWithoutStrings)) {
                if (isBlockOpener) return; // Block openers don't need validation
                if (isDependentKeyword && blockStack[blockStack.length - 1] !== requiredParentContext) {
                    throw new CompilerError(
                        `The keyword "${keyword}" cannot be used outside a ${requiredParentContext} block.`,
                        fileName,
                        lineNumber,
                        line,
                        keyword
                    );
                }
                return; // Valid keyword
            }
        }

        this.validateReservedKeywordUsage(lineWithoutStrings, fileName, lineNumber, line);
    }

    /**
     * Extracts code and comments from a line of code.
     *
     * @param line - The line of code.
     * @param inMultiLineComment - Whether we're inside a multi-line comment.
     * @returns [codePart, commentPart, updatedMultiLineState]
     */
    private extractCodeAndComment(line: string, inMultiLineComment: boolean): [string, string, boolean] {
        const singleLineCommentIndex = line.indexOf('//');
        const multiLineStart = line.indexOf('/*');
        const multiLineEnd = line.indexOf('*/');

        let codePart = line;
        let commentPart = '';

        if (inMultiLineComment) {
            if (multiLineEnd !== -1) {
                inMultiLineComment = false;
                commentPart = line.slice(0, multiLineEnd + 2);
                codePart = line.slice(multiLineEnd + 2);
            }
            return [codePart, commentPart, inMultiLineComment];
        }

        if (multiLineStart !== -1) {
            if (multiLineEnd !== -1) {
                commentPart = line.slice(multiLineStart, multiLineEnd + 2);
                codePart = line.slice(0, multiLineStart) + line.slice(multiLineEnd + 2);
            } else {
                inMultiLineComment = true;
                commentPart = line.slice(multiLineStart);
                codePart = line.slice(0, multiLineStart);
            }
        } else if (singleLineCommentIndex !== -1) {
            codePart = line.slice(0, singleLineCommentIndex);
            commentPart = line.slice(singleLineCommentIndex);
        }

        return [codePart, commentPart, inMultiLineComment];
    }

    /**
     * Removes string literals from a line of code.
     *
     * @param line - The line of code.
     * @returns The line without string literals.
     */
    private removeStringLiterals(line: string): string {
        return line.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '');
    }

    /**
     * Replaces keywords and preserves string literals.
     *
     * @param code - The code to process.
     * @returns The processed code.
     */
    private processCode(code: string): string {
        const stringLiterals: string[] = [];
        const stringLiteralsRegex = /(["'])(?:(?=(\\?))\2.)*?\1/g;

        const codeWithoutStrings = code.replace(stringLiteralsRegex, (match) => {
            stringLiterals.push(match);
            return '__STRING_LITERAL__';
        });

        const replacedCode = codeWithoutStrings.replace(
            new RegExp(`\\b(${Object.keys(keywordMapping).join('|')})\\b`, 'g'),
            (match) => keywordMapping[match]?.jsEquivalent || match
        );

        return replacedCode.replace(/__STRING_LITERAL__/g, () => stringLiterals.shift() || '');
    }

    /**
     * Validates reserved keyword usage in variables, functions, or properties.
     */
    private validateReservedKeywordUsage(
        line: string,
        fileName: string,
        lineNumber: number,
        originalLine: string
    ): void {
        const patterns = [
            { regex: new RegExp(`\\b(${this.reservedKeywords.join('|')})\\b\\s*=`), error: 'variable name' },
            { regex: new RegExp(`\\b(${this.reservedKeywords.join('|')})\\b\\s*\\(`), error: 'function name' },
            { regex: new RegExp(`\\b(${this.reservedKeywords.join('|')})\\b\\s*:`), error: 'object literal key' },
        ];

        for (const { regex, error } of patterns) {
            const match = regex.exec(line);
            if (match) {
                throw new CompilerError(
                    `The keyword "${match[1]}" cannot be used as a ${error}.`,
                    fileName,
                    lineNumber,
                    originalLine,
                    match[1]
                );
            }
        }
    }

    /**
     * Checks if a line opens a block.
     */
    private isBlockOpener(line: string): boolean {
        return Object.entries(keywordMapping).some(
            ([_, { validContext, isBlockOpener }]) => isBlockOpener && validContext?.test(line)
        );
    }

    /**
     * Gets the block opener from a line.
     */
    private getBlockOpener(line: string): string | null {
        const entry = Object.entries(keywordMapping).find(
            ([_, { validContext, isBlockOpener }]) => isBlockOpener && validContext?.test(line)
        );
        return entry ? entry[0] : null;
    }
}
