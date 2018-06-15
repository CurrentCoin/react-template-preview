# react-template-preview

This module allows developers to preview CurrentCoin Create templates.

CurrentCoin Create templates must meet the following criteria:

- A file named `index.js` which exports a React component
- A file named `interface.json` which specifies the user adjustable template parameters
- A file named `package.json` which specifies the dependencies

## `index.js`

The root React component of your template should be exported from this file.

The code can be written in ES6. This file is run through `create-react-app` so it supports all of the same features.

## `interface.json`

This file specifies the parameters which a user can adjust before they deploy your template.

It specifies the parameters, their type, and their default values.

For example,

```js
{
  "title": {
    "type": "string",
    "default": "제목입니다"
  },
  "content": {
    "type": "string",
    "default": "내용이나 정보를 적습니다"
  },
  "inverted": {
    "type": "boolean",
    "default": false
  },
  "spinSpeed": {
    "type": "range",
    "min": 1,
    "max": 60,
    "default": 5
  },
  "spinAxis": {
    "type": "enum",
    "values": ["x", "y", "z"],
    "default": "z"
  }
}
```

## `package.json`

This is the standard npm package file which must specify the npm modules which your template depends on. Dependencies can be added to this file in the standard way, `npm install title-case`.

For example,

```js
{
  "dependencies": {
    "@material-ui/core": "^1.2.1",
    "axios": "^0.18.0",
    "camel-case": "^3.0.0",
    "react-template-preview": "^1.0.25",
    "title-case": "^2.1.1"
  }
}
```

## To Start

Run `npm install` and `npm start`
