import { describe, expect, it } from 'bun:test';
import { JollyCompiler } from '~/core/compiler';

const compiler = new JollyCompiler();

describe('Keyword Tests', () => {
    // 🔍 Test valid usage of each keyword
    describe('Valid Keyword Usage', () => {
        it("should allow 'fun' as a function declaration", () => {
            const input = `
        fun greet() {
          console.log("Hello, World!");
        }
        greet();
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('function greet()');
            expect(output).toContain('greet();');
        });

        it("should allow 'lock' as a constant declaration", () => {
            const input = `lock pi = 3.14;`;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('const pi = 3.14;');
        });

        it("should allow 'free' as a variable declaration", () => {
            const input = `free radius = 5;`;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('let radius = 5;');
        });

        it("should allow 'fam' as a class declaration", () => {
            const input = `
        fam Animal {
          fun speak() {
            console.log("Roar!");
          }
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('class Animal');
            expect(output).toContain('function speak()');
        });

        it("should allow 'loopy' as a for loop", () => {
            const input = `
        loopy (free i = 0; i < 5; i++) {
          console.log(i);
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('for (let i = 0; i < 5; i++)');
        });

        it("should allow 'aslong' as a while loop", () => {
            const input = `
        free count = 0;
        aslong (count < 5) {
          console.log(count);
          count++;
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('while (count < 5)');
        });

        it("should allow 'when', 'maybe', and 'meh' in conditionals", () => {
            const input = `
        when (score >= 90) {
          console.log("A");
        } maybe (score >= 80) {
          console.log("B");
        } meh {
          console.log("C");
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('if (score >= 90)');
            expect(output).toContain('else if (score >= 80)');
            expect(output).toContain('else');
        });

        it("should allow 'yay' in a return statement", () => {
            const input = `
        fun add(a, b) {
          yay a + b;
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('return a + b;');
        });

        it("should allow 'pls' for await", () => {
            const input = `
        async fun fetchData() {
          pls fetch("https://api.example.com");
        }
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('await fetch');
        });

        it("should allow 'call' for new instances", () => {
            const input = `lock obj = call MyClass();`;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('const obj = new MyClass();');
        });
    });

    // 🔍 Test invalid usage of keywords
    describe('Invalid Keyword Usage', () => {
        it('should throw error when using keywords as variable names', () => {
            const input = `lock fun = 42;`;
            expect(() => compiler.compile(input, 'test.jolly')).toThrow(
                `The keyword "fun" cannot be used as a variable name.`
            );
        });

        it('should throw error when using keywords as function names', () => {
            const input = `fun lock() { return 42; }`;
            expect(() => compiler.compile(input, 'test.jolly')).toThrow(
                `The keyword "lock" cannot be used as a function name.`
            );
        });

        it('should throw error when using keywords as property names', () => {
            const input = `free obj = { loopy: 42 };`;
            expect(() => compiler.compile(input, 'test.jolly')).toThrow(
                `The keyword "loopy" cannot be used as a property name in an object literal.`
            );
        });

        it('should throw error when using keywords in invalid contexts', () => {
            const input = `
        lock maybe = "error";
      `;
            expect(() => compiler.compile(input, 'test.jolly')).toThrow(
                `The keyword "maybe" cannot be used as a variable name.`
            );
        });
    });

    // 🔍 Test comments handling
    describe('Keyword Handling in Comments', () => {
        it('should not replace keywords in single-line comments', () => {
            const input = `
        // This is a fun test with lock and loopy
        free value = 42;
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('// This is a fun test with lock and loopy');
            expect(output).toContain('let value = 42;');
        });

        it('should not replace keywords in multi-line comments', () => {
            const input = `
        /*
          This block has:
          - fun
          - lock
          - loopy
        */
        free value = 42;
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('/*');
            expect(output).toContain('- fun');
            expect(output).toContain('- lock');
            expect(output).toContain('- loopy');
            expect(output).toContain('let value = 42;');
        });

        it('should not replace keywords in inline comments', () => {
            const input = `
        free value = 42; // lock is here
      `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('// lock is here');
            expect(output).toContain('let value = 42;');
        });
    });

    describe('Switch Case Tests', () => {
        it('should compile pick, option, and fallback correctly', () => {
            const input = `
      pick (fruit) {
        option "apple":
          console.log("Apple! 🍎");
          yay;
        option "banana":
          console.log("Banana! 🍌");
          yay;
        fallback:
          console.log("Unknown! 🍇");
      }
    `;
            const output = compiler.compile(input, 'test.jolly');
            expect(output).toContain('switch (fruit)');
            expect(output).toContain('case "apple":');
            expect(output).toContain('case "banana":');
            expect(output).toContain('default:');
            expect(output).toContain('return;');
        });
    });
});
