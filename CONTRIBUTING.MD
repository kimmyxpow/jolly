# Contributing to Jolly 🎉

Thank you for your interest in contributing to **Jolly**! 🥳  
We’re excited to have you on board. Contributions, whether big or small, are what make this project amazing. This document will help you get started.

## Table of Contents
1. [How Can I Contribute?](#how-can-i-contribute)
    - [Bug Reports](#bug-reports)
    - [Feature Requests](#feature-requests)
    - [Code Contributions](#code-contributions)
2. [Setting Up the Project](#setting-up-the-project)
3. [Code Guidelines](#code-guidelines)
4. [Submitting a Pull Request](#submitting-a-pull-request)
5. [Communication](#communication)

## How Can I Contribute?

### Bug Reports 🐛
Found a bug? No worries! Here’s how you can report it:
1. Open an issue on the [GitHub issues page](https://github.com/kimmyxpow/jolly/issues).
2. Include the following details:
    - Steps to reproduce the bug.
    - Expected behavior vs. what happened.
    - Relevant logs or error messages.
    - Your environment (e.g., OS, Node.js version, Bun version).

> Pro Tip: If you can include a minimal reproducible example, we’ll love you even more! ❤️

### Feature Requests 🌟
Got an idea that could make Jolly better? We’d love to hear it!
- Open a **feature request** on the [GitHub issues page](https://github.com/kimmyxpow/jolly/issues).
- Describe your idea and how it can improve the project.
- If possible, provide examples or mockups.

### Code Contributions 💻
We welcome code contributions of all types:
- Fixing bugs 🐛
- Adding new features 🌟
- Improving documentation 📚
- Optimizing performance ⚡

## Setting Up the Project

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/kimmyxpow/jolly.git
cd jolly
```

### 2. Install Dependencies
We use **Bun** for development, so make sure you have it installed. If you don’t, install it [here](https://bun.sh/).

```bash
bun install
```

### 3. Run the Tests
Make sure everything is working before you start contributing:
```bash
bun run test
```

### 4. Build the Project
To build the TypeScript source code into JavaScript:
```bash
bun run build
```

---

## Code Guidelines

To maintain code quality and consistency, please follow these guidelines:

### Code Style
- Use **Prettier** for formatting. Run:
  ```bash
  bun run format
  ```
- Follow TypeScript best practices:
  - Use `strict` typing where possible.
  - Avoid using `any`.

### Testing
- Write tests for any new features or bug fixes.
- Use the `tests/` folder to organize test cases.
- Run the test suite to ensure your changes don’t break existing functionality:
  ```bash
  bun run test
  ```

### Commit Messages
Use clear and concise commit messages. Follow this structure:
```
<type>(<scope>): <subject>
```

Examples:
- `fix(cli): handle invalid input gracefully`
- `feat(compiler): add support for new keywords`
- `docs: improve README.md`

### Folder Structure
Keep new files organized under the correct folder:
- **`src/core`**: Compiler logic and core functionality.
- **`src/cli`**: Command-line interface and related tools.
- **`tests`**: Unit and integration tests.

## Submitting a Pull Request

When you’re ready to contribute your changes, follow these steps:

1. **Fork the Repository**  
   Create a fork of the repository to work on your changes.

2. **Create a Feature Branch**  
   Use a descriptive branch name:
   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Make Your Changes**  
   Edit files and commit your changes:
   ```bash
   git add .
   git commit -m "feat(compiler): add support for new feature"
   ```

4. **Push Your Changes**  
   Push your branch to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```

5. **Open a Pull Request**  
   Go to the repository’s GitHub page and open a Pull Request (PR).  
   Include a clear description of your changes and link any relevant issues.

## Communication

Got questions? Need help? Reach out to us!

- Open an issue on [GitHub](https://github.com/kimmyxpow/jolly/issues).
- Join the community discussion on [Discord](https://discord.gg/ybanDqVTsA).

We’re happy to help and look forward to your contributions! 🥳

## Thank You! 🙌

Your contributions make **Jolly** better for everyone. Thank you for being part of this fun and exciting journey! 🌟
