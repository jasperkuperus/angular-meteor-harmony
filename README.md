# ngAnnotated Harmony for Meteor
If you are not using angular-meteor, then please use [mquandalle:harmony](https://github.com/mquandalle/meteor-harmony/) instead. This package is only to be used with angular-meteor.

## Why jasperkuperus:angular-harmony?
In order to use mquandalle:harmony in production in conjunction with [angular-meteor](https://github.com/olov/ng-annotate), ngAnnotate is a necessity. This package is a fork of mquandalle:harmony, only adding ngAnnotate. So, all `.next.js` files are first compiled to ES5 and then annotated with ngAnnotate, making your Angular setup also work in a minified setup (e.g. `meteor run --production`).

### Installation
```
meteor add jasperkuperus:angular-harmony
```

## Original readme

A thin wrapper around [Traceur](https://github.com/google/traceur-compiler) for [Meteor](https://www.meteor.com/).

>"Traceur is a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future **today**. Traceur's goal is to inform the design of new JavaScript features which are only valuable if they allow you to write better code. Traceur allows you to try out new and proposed
[language features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) today, helping you say what you mean in your code while informing the standards process."
>
> – Traceur README

## Usage

Each file with the `.next.js` extension will be automatically compiled (with source maps) and bundled.

You'll be able to use every non-experimental [language feature](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) except `import`. Meteor automatically [imports your files](http://docs.meteor.com/#structuringyourapp), so [exported variables](https://github.com/mquandalle/meteor-harmony/blob/master/tests/harmony_test_setup.next.js#L3) are [globally accesible](https://github.com/mquandalle/meteor-harmony/blob/master/tests/harmony_tests.next.js#L141).
