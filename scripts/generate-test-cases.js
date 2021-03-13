const { existsSync, mkdirSync, readdirSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const rimraf = require('rimraf');

const argv = process.argv.slice(2);

const cases = parseInt(argv[0] || 1, 10);
const range = parseInt(argv[1] || 182, 10);

function generationPath(path = '') {
    return resolve(process.cwd(), 'generated', path);
}

if (!existsSync(generationPath())) {
    mkdirSync(generationPath());
}

const data = [cases];
for (let i = 0; i < cases; i++) {
    const rows = Math.floor(Math.random() * (range || 182)) + 1;
    const columns = Math.floor(Math.random() * (range || 182)) + 1;

    data.push(`${rows} ${columns}`);
    for (let r = 0; r < rows; r++) {
        let rowStr = '';
        for (let c = 0; c < columns; c++) {
            rowStr += Math.random() > 0.5 ? 1 : 0;
        }
        data.push(rowStr);
    }
    data.push('');
}

const files = readdirSync(generationPath());

const fileName = (files.length + 1).toString().padStart(4, '0');

writeFileSync(generationPath(`${fileName}.txt`), data.join('\n'), {
    encoding: 'utf-8',
});
