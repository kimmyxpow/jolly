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
export const keywordMapping: Record<string, { jsEquivalent: string; validContext?: RegExp }> = {
    fun: { jsEquivalent: 'function' },
    lock: { jsEquivalent: 'const' },
    free: { jsEquivalent: 'let' },
    fam: { jsEquivalent: 'class' },
    loopy: { jsEquivalent: 'for', validContext: /^\s*loopy\s*\(/ },
    aslong: { jsEquivalent: 'while', validContext: /^\s*aslong\s*\(/ },
    when: { jsEquivalent: 'if', validContext: /^\s*when\s*\(/ },
    maybe: { jsEquivalent: 'else if', validContext: /^\s*\}\s*maybe\s*\(/ },
    meh: { jsEquivalent: 'else', validContext: /^\s*\}\s*meh\s*\{/ },
    yay: { jsEquivalent: 'return' },
    pls: { jsEquivalent: 'await' },
    call: { jsEquivalent: 'new' },
    pick: { jsEquivalent: 'switch', validContext: /^\s*pick\s*\(/ },
    option: { jsEquivalent: 'case', validContext: /^\s*option\s+/ },
    fallback: { jsEquivalent: 'default', validContext: /^\s*fallback\s*:/ },
};
