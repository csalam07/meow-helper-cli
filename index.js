/**
 * Cli `meow` Helper.
 *
 * Automatically generate formatted help text for `meow` CLI
 *
 * @author csalam07 <https://twitter.com/CSALam12/>
 */

import chalk from 'chalk';
import { getDefaultValue, createTable } from './utils/index.js';

const dim = chalk.dim;
const greenInverse = chalk.bold.inverse.green;
const cyanInverse = chalk.bold.inverse.cyan;
const yellowInverse = chalk.bold.inverse.yellow;

const meowHelper = (
  name = `(CLI name undefined)`,
  desc,
  commands = {},
  flags = {},
  defaults = true,
  header,
  footer,
) => {
  let help = '';
  const spacer = `\n\n`;

  if (header) {
    help += `${header}${spacer}`;
  }

  if (desc) {
    help += `${desc}${spacer}`;
  }

  // Usage.
  help += `${greenInverse(` USAGE `)} ${spacer}`;
  help += chalk`{gray $} {green ${name}} {cyan <command>} {yellow [option]}`;

  // Commands.
  help += `\n\n${cyanInverse(` COMMANDS `)} ${spacer}`;
  const tableCommands = createTable();
  const commandKeys = Object.keys(commands);

  for (const command of commandKeys) {
    let options = commands[command];
    const defaultValue = getDefaultValue(defaults, options);

    tableCommands.push([
      chalk`{cyan ${command}}`,
      `${options.desc}  ${dim(defaultValue)}`,
    ]);
  }
  help += tableCommands.toString();

  // Flags.
  help += `\n\n${yellowInverse(` OPTIONS `)} ${spacer}`;
  const tableFlags = createTable();
  const flagKeys = Object.keys(flags);

  for (const flag of flagKeys) {
    let options = flags[flag];
    let alias = options.alias ? `-${options.alias}, ` : ``;
    const defaultValue = getDefaultValue(defaults, options);

    tableFlags.push([
      chalk`{yellow ${alias}--${flag}}`,
      `${options.desc} ${dim(defaultValue)}`,
    ]);
  }

  help += tableFlags.toString();
  help += `\n`;

  if (footer) {
    help += `\n${footer}\n`;
  }

  return help;
};

export default meowHelper;
