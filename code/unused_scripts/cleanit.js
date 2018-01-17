const arg = require('commander')
const fs = require('fs')

arg
  .version('1.0.0')
  .usage('-r <file_path> -o <output_path>')
  .option('-r, --raw <value>', 'Input data file that will be used ')
  .option('-o, --output <value>', 'Output file path that will be created')
  .parse(process.argv)

// parsing du fichier csv
const raw = fs
  .readFileSync(arg.raw, { encoding: 'UTF8' })
  .split('\n')
  .map(a => a.split(';').map(a => a.replace('\r', '').replace(/\"/g, '')))
const raw_keys = raw.splice(0, 1)

// ecrit le fichier
fs.writeFileSync(
  arg.output,
  JSON.stringify(raw.map(line => ({ country: line[0], year: line[1], value:line[2] })))
)
