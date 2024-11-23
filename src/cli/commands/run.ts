import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';
import { JollyCompiler } from '~/core/compiler';

export function runCommand(file: string) {
    const spinner = ora(chalk.blue(`Running ${file}...`)).start();

    try {
        const inputPath = path.resolve(file);
        if (!fs.existsSync(inputPath) || path.extname(inputPath) !== '.jolly') {
            throw new Error('File not found or not a valid Jolly file.');
        }

        const code = fs.readFileSync(inputPath, 'utf-8');

        const compiler = new JollyCompiler();
        const compiledCode = compiler.compile(code, inputPath);

        const tempFilePath = path.join(__dirname, '../../dist/__temp__.js');
        fs.writeFileSync(tempFilePath, compiledCode, 'utf-8');

        spinner.succeed(chalk.green(`Compiled ${file} successfully.`));
        console.log(chalk.yellow(`Executing ${file}:\n`));

        execSync(`bun ${tempFilePath}`, { stdio: 'inherit' });

        fs.unlinkSync(tempFilePath);
    } catch (err) {
        const error = err as Error;
        spinner.fail(chalk.red(`Failed to run ${file}: ${error.message}`));
    } finally {
        process.exit(1);
    }
}
