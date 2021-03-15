const { execSync } = require('child_process');
const { clear } = require('console');

const chokidar = require('chokidar');
const chalk = require('chalk');

const [solutionNumber = 1] = process.argv.slice(2);

const watcher = chokidar.watch(['tsconfig.json', '.env', './src'], {
    cwd: process.cwd(),
    ignoreInitial: true,
    ignored: ['**/node_modules'],
    atomic: true,
});

function run() {
    execSync(`yarn ts-node src/index.ts ${solutionNumber}`, {
        cwd: process.cwd(),
        stdio: 'inherit',
    });
    console.log('');
}

watcher.on('ready', () => {
    clear();
    console.log(chalk.grey('Ready for changes!'));
    run();
});

watcher.on('all', (eventName, path) => {
    clear();
    console.log(
        chalk.grey(
            'Restarting. Reason: File',
            chalk.bold(path),
            'changed by event',
            chalk.bold(eventName)
        )
    );
    run();
});

watcher.on('error', (error) => {
    console.error(chalk.red(error.message));
    console.error(error.stack);
});
