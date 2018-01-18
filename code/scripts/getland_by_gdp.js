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

let list = raw
  // ne prend que les lignes du GDP
  .filter(line => line[2] == 'Gross Domestic Product (GDP)')
  // retire la colonne item et année
  .map(line => [line[0], line[3]])

//insert les noms des colonnes
list = [['country', 'GDP'], ...list]

//transforme en texte 
let text = list.map(line =>
  line
    .map(cell => `"${cell.replace(/\\/g, '\\\\').replace(/\"/g, '\\"')}"`)
    .join(';')
).join('\r\n')

// ecrit le fichier
fs.writeFileSync(arg.output, text)
