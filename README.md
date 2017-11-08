# browserslist-config-gandi


Shareable [Browserslist](https://github.com/ai/browserslist) config for [Gandi](https://github.com/Gandi).


## Installation

``` sh
$ npm install --save-dev @gandi/browserslist-config-gandi
```
or

``` sh
$ yarn add --dev @gandi/browserslist-config-gandi
```


## Usage

If you're directly consuming this package in an application, add this to your `package.json`:

```js
{
  "browserslist": [
    "extends @gandi/browserslist-config-gandi"
  ]
}
```

When manually configuring a tool that uses Browserslist, importing this package returns the array of supported browsers.

For example, when configuring [babel-preset-env](https://github.com/babel/babel/tree/master/experimental/babel-preset-env) via JavaScript:

```js
{
  presets: [
    ['env', {
      targets: {
        browsers: require('@gandi/browserslist-config-gandi')
      }
    }]
  ]
}
```

## Browsers

Preview the resulting [list of supported browsers](http://browserl.ist/?q=%3E+1%25%2CLast+2+versions%2CIE+%3E%3D+10%2CEdge+%3E%3D+13%2CSafari+%3E%3D+6%2CiOS+%3E%3D+6%2CSamsung+%3E%3D+4).


## Changelog

All notable changes to this project will be documented in [this section](CHANGELOG.md).

*This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog](http://keepachangelog.com/).*


## Found a bug or contribute?

Please open an [issue](https://github.com/Gandi/browserslist-config-gandi/issues). If it's clear and well labelized, it's quicker to fix!

Else you can start contributing.


## Code of conduct

Be nice. Thanks.


## License

ISC.
