import chalk from 'chalk';
import figlet from 'figlet';

export function printHeader() {
    console.log(chalk.cyan(figlet.textSync('Jolly CLI', { horizontalLayout: 'fitted' })));
    console.log(chalk.green('\n\n✨ Welcome to the Jolly Compiler! ✨\n'));
}
