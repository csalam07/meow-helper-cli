# meow-helper-cli


> Automatically generate formatted helper text for meow cli helper

<br>


## Install

### npm
```sh
npm install meow meow-helper-cli
```

### npm
```sh
yarn add meow meow-helper-cli
```

<br>


## Usage

```js
import meow from 'meow';
import meowHelp from meow-helper-cli;

const commands = {
	new: {desc: `Creates a new user account`},
	duplicate: {desc: `Duplicates a my name`}
};

const flags = {
	random: {
		desc: `Prints random info`,
		type: 'boolean',
		default: true
	}
};

const helpText = meowHelp({
	name: `cli-command`,
	flags,
	commands
});

meow(helpText, {flags});

// Now run `cli-command --help` to view the
// following auto formatted & generated help info.
```


<br />


## API

### meowHelp(options)

#### ❯ options

Type: `object`

Default: ↓

```js
{
	name = `(CLI name undefined)`,
	desc,
	commands = {},
	flags = {},
	defaults = true,
	header,
	footer
}
```

You can specify the options below.

#### ❯ name

Type: `string`<br>
Default: `(CLI name undefined)`

The `bin` command name of the cli that's used to run the CLI.

#### ❯ desc

Type: `string`<br>
Default: `undefined` (optional)

Optionally define a description text for the help message.

#### ❯ commands

Type: `string`<br>
Default: `{}` (optional)

Optionally, define a JavaScript object containing info on the CLI commands (i.e. `meow` inputs). Each command has a `desc` property to define the help text.

#### ❯ flags

Type: `string`<br>
Default: `{}`

Define CLI options (i.e. `meow` flags) just like you do with `meow` which is the `flags` JavaScript object containing each flag with an extra `desc` property to define the help text.

#### ❯ defaults

Type: `string`<br>
Default: `true` (optional)

Prints out the default values of flags. Set to `false` to disable.

#### ❯ header

Type: `string`<br>
Default: `undefined` (optional)

Optionally, add additional header information.

#### ❯ footer

Type: `string`<br>
Default: `undefined` (optional)

Optionally, add additional footer information.


<br>


## License 

- MIT © [csalam07](https://twitter.com/CSALam12/)




