# Tests

Unit testing is done with [Sass True](https://github.com/oddbird/true) and supported by Jest. Unit tests for mixins or functions are required before any pull request will be approved.

Tests are maintained in the `./tests` directory. All test names must follow this convention, `*.spec.scss`.

## Functions

Functions are to include an `_` in the name. For example, `_myFunction.spec.scss`.

The basic construct of a function unit test is to include the test-module and the test. This is done using the `@include describe()` and the `@include it()` methods.

The assertion has [multiple methods](https://www.oddbird.net/true/docs/api-assert-values.html) to choose from. This example is using the `@include assert-equal()` method.

```scss
@import 'true';
@import '[path to function]';

@include describe('[name of function]') {
  @include it('should return [description of function]') {
    @include assert-equal([function]([argument(s)]), '[expected return]');
  }
}
```

## Mixins

The basic construct of a mixin unit test is to include the test-module and the test. This is done using the `@include describe()` and the `@include it()` methods.

The [assertion model](https://www.oddbird.net/true/docs/api-assert-output.html) for comparing outputs uses the `@include assert()` method that requires the `@include output` and `@include expect` methods.

```scss
@import 'true';
@import '[path to mixin]';

@include describe('[name of mixin]') {
  @include it('should return [description of mixin]') {
    @include assert {
      @include output {
        @include [mixin]([argument(s)];
      }

      @include expect {
        [expected CSS output];
      }
    }
  }
}
```
