# typed-static-files
create .d.ts file from static files

## Installation

```node
npm install typed-static-files
```

## Usage

```node
// create declare file for ./src/res/**/*.(png|jpg)
npx typed-sf -e png,jpg -s ./src/res
```

## Options
|                | alias | default     | description                                        |
| -------------- | ----- | ----------- | -------------------------------------------------- |
| **Required**   |       |             |                                                    |
| --ext          | -e    |             | File extension (* for all file)                    |
| --searchFolder | -s    |             | Search folder where relate with 'cwd' option       |
| &nbsp;         |       |             |                                                    |
| **Optional**   |       |             |                                                    |
| --delete       | -d    | false       | Auto delete unused declare file                    |
| --cwd          |       | process.cwd | The current working directory in which to search.  |
| --eol          |       | lf          | The declare file eol. ['lf', 'crlf', 'cr', 'auto'] |
| --watch        | -w    | false       | Watch mode                                         |
| --help         | -h    |             | help                                               |
