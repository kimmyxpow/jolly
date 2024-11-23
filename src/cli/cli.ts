#!/usr/bin/env bun

import { Command } from 'commander';
import { compileCommand } from '~/cli/commands/compile';
import { runCommand } from '~/cli/commands/run';
import { printHeader } from '~/cli/header';

/**
 * 🎛️ CLI Entry Point
 * This is the brain of the Jolly CLI, where all commands are wired together. 🧠
 * Think of this file as the main menu for your Jolly coding adventure! 🎉
 */
const program = new Command();
printHeader();

program
    .command('compile')
    .description('Compile Jolly files to JavaScript')
    .argument('<input>', 'Glob pattern, file, or directory to compile')
    .option('-o, --output <output>', 'Output directory for compiled files')
    .option('--minify', 'Minify the compiled JavaScript files')
    .option('--prettify', 'Prettify the compiled JavaScript files')
    .action(compileCommand);

program
    .command('run')
    .description('Run a Jolly file directly')
    .argument('<file>', 'Path to the Jolly file')
    .action(runCommand);

program.parse();
