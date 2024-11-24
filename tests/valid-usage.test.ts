import { JollyCompiler } from '~/core/compiler';
import { describe, it, expect } from 'bun:test';

const compiler = new JollyCompiler();

describe('Valid Usage of Jolly Keywords', () => {
    it('should compile fun keyword correctly', () => {
        const input = `
      fun greet() {
        console.log("Hello, Jolly!");
      }
      greet();
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile lock and free keywords correctly', () => {
        const input = `
      lock name = "Jolly";
      free age = 25;
      console.log(name, age);
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile fam keyword correctly', () => {
        const input = `
      fam Person {
        free name;
        free age;

        fun constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        fun greet() {
          console.log("Hi, my name is " + this.name);
        }
      }
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile loopy and aslong keywords correctly', () => {
        const input = `
      loopy (free i = 0; i < 5; i++) {
        console.log("Looping:", i);
      }

      free count = 3;
      aslong (count > 0) {
        console.log("Countdown:", count);
        count--;
      }
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile when, maybe, and meh keywords correctly', () => {
        const input = `
      when (x > 0) {
        console.log("Positive");
      } maybe (x < 0) {
        console.log("Negative");
      } meh {
        console.log("Zero");
      }
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile yay keyword correctly', () => {
        const input = `
      fun add(a, b) {
        yay a + b;
      }
      console.log(add(2, 3));
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile pls keyword correctly', () => {
        const input = `
      async fun fetchData() {
        lock data = await pls fetch("https://api.example.com");
        yay data;
      }
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile call keyword correctly', () => {
        const input = `
      fam Dog {
        fun constructor(name) {
          this.name = name;
        }
      }

      free myDog = call Dog("Buddy");
      console.log(myDog.name);
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });

    it('should compile pick, option, and fallback keywords correctly', () => {
        const input = `
      pick (fruit) {
        option "apple":
          console.log("Apple 🍎");
        option "banana":
          console.log("Banana 🍌");
        fallback:
          console.log("Unknown fruit");
      }
    `;
        expect(() => compiler.compile(input, 'valid.jolly')).not.toThrow();
    });
});
