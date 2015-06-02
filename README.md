# ngAnnotated Harmony for Meteor
**Warning:** *only* use this package if you need `ngAnnotate` for your `.next.js` harmony files. Just want harmony for Meteor, but you're not using Angular? Then please use [mquandalle:harmony](https://github.com/mquandalle/meteor-harmony/) instead.

## Why jasperkuperus:angular-harmony?
If you run `meteor run --production`, all source files are minified, which is a good thing, but possibly breaks Angular Dependency Injection. Therefore, this package adds [ngAnnotate](https://github.com/olov/ng-annotate) to the mquandalle:harmony package.

### Installation
```
meteor add jasperkuperus:angular-harmony
```

## Using babel?
Are you using babel and Angular in your Meteor project? Have a look at [pbastowski:angular-babel](https://github.com/pbastowski/angular-meteor-babel).

## Original readme

A thin wrapper around [Traceur](https://github.com/google/traceur-compiler) for [Meteor](https://www.meteor.com/).

>"Traceur is a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future **today**. Traceur's goal is to inform the design of new JavaScript features which are only valuable if they allow you to write better code. Traceur allows you to try out new and proposed
[language features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) today, helping you say what you mean in your code while informing the standards process."
>
> – Traceur README

## Usage

Each file with the `.next.js` extension will be automatically compiled (with source maps) and bundled.

You'll be able to use every non-experimental [language feature](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) except `import`. Meteor automatically [imports your files](http://docs.meteor.com/#structuringyourapp), so [exported variables](https://github.com/mquandalle/meteor-harmony/blob/master/tests/harmony_test_setup.next.js#L3) are [globally accesible](https://github.com/mquandalle/meteor-harmony/blob/master/tests/harmony_tests.next.js#L141).
