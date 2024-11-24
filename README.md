# 🎉 Jolly - A Fun, Fresh Language Compiler for JavaScript! 🥳

Welcome to **Jolly**, the happiest way to write and compile JavaScript! 🚀  
With Jolly, you can write your code in a **fun, playful syntax** and compile it into plain old JavaScript. Let's make coding a joyful experience again! 🌈✨

## ⚠️ Disclaimer: This is NOT a Serious Project! 🐒

**Jolly** was created purely for fun, learning, and exploration.

If you're looking for a professional-grade language or compiler, this might not be the right choice. 🤷‍♂️

However, if you want to add some joy to your coding life, experiment with playful syntax, or just have a good laugh, Jolly is here for you! 😄

## 🌟 Features

-   🪄 **Custom Syntax**: Use playful keywords like `fun` (function), `lock` (const), `loopy` (for), and more!
-   ⚡ **Fast Compilation**: Blazing fast transpilation to JavaScript.
-   🔧 **CLI & Programmatic Support**: Use Jolly via the command line or in your Node.js project.
-   🎨 **Minify & Prettify**: Automatically beautify or shrink your compiled code.
-   🔍 **Clear Error Reporting**: See exactly where your mistakes are with line numbers and helpful hints.

## 🔧 Installation

### Install Globally (for CLI)

To use Jolly as a command-line tool:

```bash
npm install -g jolly-lang
```

### Install Locally (for Programmatic Use)

To use Jolly in your Node.js projects:

```bash
npm install jolly-lang
```

## 🚀 Usage

### CLI Commands

#### Compile Jolly Files

Compile a `.jolly` file into JavaScript:

```bash
jolly compile path/to/your/file.jolly --output path/to/output.js
```

#### Run Jolly Files

Run a `.jolly` file directly:

```bash
jolly run path/to/your/file.jolly
```

#### Additional CLI Options:

-   `--minify`: Minify the compiled JavaScript.
-   `--prettify`: Prettify the compiled JavaScript.

### Programmatic Usage

Use **JollyCompiler** in your Node.js projects to compile Jolly code programmatically:

#### Example:

```javascript
import { JollyCompiler } from 'jolly-lang';

const compiler = new JollyCompiler();
const jollyCode = `
lock greeting = "Hello, Jolly!";
console.log(greeting);
`;

// Compile Jolly code to JavaScript
const compiledCode = compiler.compile(jollyCode, 'example.jolly');

// Output the compiled JavaScript
console.log(compiledCode);
```

#### Output:

```javascript
const greeting = 'Hello, Jolly!';
console.log(greeting);
```

## 🖋️ Jolly Syntax Overview

Here’s a quick peek at the **Jolly syntax** and its JavaScript equivalents:

| Jolly Keyword | JavaScript Equivalent | Description                         |
| ------------- | --------------------- | ----------------------------------- |
| `fun`         | `function`            | Define a function.                  |
| `lock`        | `const`               | Declare a constant variable.        |
| `free`        | `let`                 | Declare a mutable variable.         |
| `fam`         | `class`               | Create a class.                     |
| `loopy`       | `for`                 | Create a for loop.                  |
| `aslong`      | `while`               | Create a while loop.                |
| `when`        | `if`                  | Conditional statement (if).         |
| `maybe`       | `else if`             | Additional condition.               |
| `meh`         | `else`                | Fallback case.                      |
| `yay`         | `return`              | Return a value.                     |
| `pls`         | `await`               | Await an async task.                |
| `call`        | `new`                 | Instantiate a class.                |
| `pick`        | `switch`              | Switch statement for branching.     |
| `option`      | `case`                | Case in a switch statement.         |
| `fallback`    | `default`             | Default case in a switch statement. |

## ✨ Example Code

Here’s how a Jolly file looks compared to JavaScript:

### Jolly:

```jolly
lock score = 85;

when (score >= 90) {
  console.log("You got an A! 🎉");
} maybe (score >= 80) {
  console.log("You got a B! 😄");
} meh {
  console.log("You need to work harder! 😢");
}
```

### Compiled JavaScript:

```javascript
const score = 85;

if (score >= 90) {
    console.log('You got an A! 🎉');
} else if (score >= 80) {
    console.log('You got a B! 😄');
} else {
    console.log('You need to work harder! 😢');
}
```

## 🌍 Community & Contribution

We believe coding should be fun, fresh, and inclusive. Join us on this journey to make coding a little brighter and more enjoyable!

-   Found a bug or have an idea? Open an issue or submit a pull request. 🚀
-   Share your love for Jolly by starring the repository! 🌟
-   Want to contribute? Check out the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.

## 📜 License

**Jolly** is licensed under the [MIT License](./LICENSE). Feel free to use it, modify it, and share it with the world! 🌍

---

> **Let’s bring some joy back into coding with Jolly! 🎉💻 But remember, don’t take this too seriously—it’s just for fun! 😉**
