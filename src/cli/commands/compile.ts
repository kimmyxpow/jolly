import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';
import prettier from 'prettier';
import { minify } from 'terser';
import { JollyCompiler } from '~/core/compiler';
import ora from 'ora';
import chalk from 'chalk';

export async function compileCommand(input: string, options: any) {
    const spinner = ora(chalk.blue('Finding Jolly files...')).start();

    try {
        const files = await glob(input, { dot: true, onlyFiles: true });

        if (files.length === 0) {
            spinner.fail(chalk.red('No matching files found.'));
            process.exit(1);
        }

        spinner.succeed(chalk.green(`Found ${files.length} file(s).`));

        const compiler = new JollyCompiler();
        const outputPath = options.output ? path.resolve(options.output) : null;

        if (outputPath && fs.existsSync(outputPath) && !fs.statSync(outputPath).isDirectory()) {
            spinner.fail(chalk.red(`"${outputPath}" exists and is not a directory.`));
            process.exit(1);
        }

        if (outputPath) fs.mkdirSync(outputPath, { recursive: true });

        for (const file of files) {
            spinner.start(chalk.blue(`Compiling ${file}...`));

            try {
                const code = fs.readFileSync(file, 'utf-8');
                const compiledCode = compiler.compile(code, file);

                let outputCode = compiledCode;

                if (options.minify) {
                    spinner.text = chalk.blue(`Minifying ${file}...`);
                    outputCode = (await minify(outputCode)).code || compiledCode;
                }

                if (options.prettify) {
                    spinner.text = chalk.blue(`Prettifying ${file}...`);
                    outputCode = await prettier.format(outputCode, { parser: 'babel' });
                }

                const outputFile = path.join(outputPath ?? '', path.basename(file, '.jolly') + '.js');

                fs.writeFileSync(outputFile, outputCode, 'utf-8');
                spinner.succeed(chalk.green(`Compiled ${file} -> ${outputFile}`));
            } catch (err) {
                const error = err as Error;
                spinner.fail(chalk.red(`Failed to compile ${file}: ${error.message}`));
            }
        }

        console.log(chalk.green('\n✨ All done! Your Jolly files have been compiled. ✨'));
    } catch (err) {
        const error = err as Error;
        spinner.fail(chalk.red(`Error: ${error.message}`));
    } finally {
        process.exit(1);
    }
}
