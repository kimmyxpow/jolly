import { JollyCompiler } from '~/core/compiler';
import { describe, it, expect } from 'bun:test';

const compiler = new JollyCompiler();

describe('Invalid Usage of Jolly Keywords', () => {
    it('should throw error for fun used as a variable name', () => {
        const input = `lock fun = 42;`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "fun" cannot be used as a variable name.'
        );
    });

    it('should throw error for lock used in the wrong context', () => {
        const input = `lock = "invalid";`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "lock" cannot be used as a variable name.'
        );
    });

    it('should throw error for fam used as a property name', () => {
        const input = `free obj = { fam: "value" };`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "fam" cannot be used as a object literal key.'
        );
    });

    it('should throw error for loopy used outside a valid loop', () => {
        const input = `loopy = "invalid";`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "loopy" cannot be used as a variable name.'
        );
    });

    it('should throw error for maybe used without a when block', () => {
        const input = `
      maybe (x > 0) {
        console.log("Invalid maybe");
      }
    `;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "maybe" cannot be used outside a when block.'
        );
    });

    it('should throw error for meh used without a when block', () => {
        const input = `
      meh {
        console.log("Invalid meh");
      }
    `;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "meh" cannot be used outside a when block.'
        );
    });

    it('should throw error for fallback used outside a pick block', () => {
        const input = `
      fallback:
        console.log("Invalid fallback");
    `;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "fallback" cannot be used outside a pick block.'
        );
    });

    it('should throw error for yay used as a variable name', () => {
        const input = `lock yay = 42;`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "yay" cannot be used as a variable name.'
        );
    });

    it('should throw error for pls used as a property name', () => {
        const input = `free obj = { pls: "value" };`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "pls" cannot be used as a object literal key.'
        );
    });

    it('should throw error for call used as a variable name', () => {
        const input = `lock call = 42;`;
        expect(() => compiler.compile(input, 'invalid.jolly')).toThrow(
            'The keyword "call" cannot be used as a variable name.'
        );
    });
});
