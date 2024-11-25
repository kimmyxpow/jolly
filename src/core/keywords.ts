/**
 * 🗺️ `keywordMapping`
 *
 * This object defines the mapping between Jolly keywords and their JavaScript equivalents.
 * It also optionally includes context validation to ensure that certain keywords are only used
 * in valid syntactic positions (e.g., `pick` for `switch`, `option` for `case`).
 *
 * Each key in `keywordMapping` represents a Jolly keyword, and its value is an object
 * with the following properties:
 *
 * - `jsEquivalent` (string): The JavaScript equivalent of the Jolly keyword.
 * - `validContext` (RegExp, optional): A regular expression that validates the correct context
 *   where the keyword can be used.
 */
type KeywordMapping = Record<
    string,
    {
        jsEquivalent: string;
        validContext?: RegExp;
        requiredParentContext?: string;
        isBlockOpener?: boolean;
        isDependentKeyword?: boolean;
    }
>;

export const keywordMapping: KeywordMapping = {
    // Basic constructs
    fun: { jsEquivalent: 'function' },
    lock: { jsEquivalent: 'const' },
    free: { jsEquivalent: 'let' },
    fam: { jsEquivalent: 'class' },

    // Loops
    loopy: { jsEquivalent: 'for', validContext: /^\s*loopy\s*\(/, isBlockOpener: true },
    aslong: { jsEquivalent: 'while', validContext: /^\s*aslong\s*\(/, isBlockOpener: true },

    // Conditionals
    when: { jsEquivalent: 'if', validContext: /^\s*when\s*\(/, isBlockOpener: true },
    maybe: {
        jsEquivalent: 'else if',
        validContext: /^\s*(} )?maybe\s*\(/,
        requiredParentContext: 'when',
        isDependentKeyword: true,
    },
    meh: {
        jsEquivalent: 'else',
        validContext: /^\s*(} )?meh\s*\{/,
        requiredParentContext: 'when',
        isDependentKeyword: true,
    },

    // Return
    yay: { jsEquivalent: 'return' },

    // Async
    pls: { jsEquivalent: 'await' },

    // Instantiation
    call: { jsEquivalent: 'new' },

    // Switch-case
    pick: { jsEquivalent: 'switch', validContext: /^\s*pick\s*\(/, isBlockOpener: true },
    option: {
        jsEquivalent: 'case',
        validContext: /^\s*option\s+/,
        requiredParentContext: 'pick',
        isDependentKeyword: true,
    },
    fallback: {
        jsEquivalent: 'default',
        validContext: /^\s*fallback\s*:/,
        requiredParentContext: 'pick',
        isDependentKeyword: true,
    },

    // Loop control
    bail: { jsEquivalent: 'break' },
    skip: { jsEquivalent: 'continue' },
};
