# typed-static-files
create .d.ts file from static files

## Installation

```node
npm install typed-static-files
```

## Usage

```node
// create declare file for ./src/res/**/*.(png|jpg) and ./src/static/**/*.(png|jpg)
npx typed-sf -e png,jpg -s ./src/res,./src/static
```

If you have file: `./src/res/test.png`

Will create a declaration file for it: `./src/res/test.png.d.ts`


## Options
|                | alias | default     | description                                                                     |
| -------------- | ----- | ----------- | ------------------------------------------------------------------------------- |
| **Required**   |       |             |                                                                                 |
| --ext          | -e    |             | File extension (* for all file) <br /> png,jpg,...                              |
| --searchFolder | -s    |             | Search folders where relate with 'cwd' option <br /> ./src/res,./src/static,... |
| &nbsp;         |       |             |                                                                                 |
| **Optional**   |       |             |                                                                                 |
| --delete       | -d    | false       | Auto delete unused declare file                                                 |
| --cwd          |       | process.cwd | The current working directory in which to search.                               |
| --eol          |       | lf          | The declare file eol. <br /> ['lf', 'crlf', 'cr', 'auto']                       |
| --watch        | -w    | false       | Watch mode                                                                      |
| --help         | -h    |             | help                                                                            |
