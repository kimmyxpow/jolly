import { describe, expect, it } from 'bun:test';
import { JollyCompiler } from '../src/core/compiler';

const compiler = new JollyCompiler();

describe('Compiler Tests', () => {
    it('should compile Jolly code to valid JavaScript', () => {
        const input = `
      lock pi = 3.14;
      free radius = 5;
      free area = pi * radius * radius;
      console.log("The area is " + area);
    `;
        const output = compiler.compile(input, 'test.jolly');

        expect(output).toContain(`const pi = 3.14;`);
        expect(output).toContain(`let radius = 5;`);
        expect(output).toContain(`let area = pi * radius * radius;`);
        expect(output).toContain(`console.log("The area is " + area);`);
    });

    it('should replace keywords correctly', () => {
        const input = `
      loopy (free i = 0; i < 10; i++) {
        console.log(i);
      }
    `;
        const output = compiler.compile(input, 'test.jolly');

        expect(output).toContain(`for (let i = 0; i < 10; i++) {`);
    });
});
