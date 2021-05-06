# Auro Principles for writing consistent, idiomatic CSS
<a name="idiomatic-css"></a>
## Table of contents

1. <auro-hyperlink relative href="#idiomatic-css">What is Idiomatic CSS?</auro-hyperlink>
1. <auro-hyperlink relative href="#comments">Comments</auro-hyperlink>
1. <auro-hyperlink relative href="#format">Format</auro-hyperlink>
1. <auro-hyperlink relative href="#declaration-order">Declaration Order & Grouping</auro-hyperlink>
1. <auro-hyperlink relative href="#additional">Additional Information</auro-hyperlink>


## 1. What is Idiomatic CSS?

What is __idiomatic__?

> Using, containing, or denoting expressions that are natural to a native speaker: distinctive idiomatic dialogue.

When we speak or write thoughts and ideas we strive to construct our words in a manner that is easily understood, clear, concise, logical, and does not require excessive effort on the part of the listener to understand the context or message. __Idiomatic CSS__ means to write our style code with similar goals. We aim for more than just _technically correct_ code.
<a name="comments"></a>
* Keep your code readable and understandable.
* Code should be consistently written as though by a single author regardless of the number of contributors.
* Use whitespace to improve the readability of your code.

All Auro Design System components created using [WC-Generator](http://auro.alaskaair.com/getting-started/developers/generator/install) include a stylelint config which will enforce all guidelines outlined in this document.


## 2. Comments

Don't overlook the value of comments in style code. Describe how your code works and any limitations. Comments help others to to understand the purpose of your code and non-obvious aspects of the implementation. Comments should be simple, clear and consistently written.

* Comments should appear on the line above their subject.
* Comments should be written in plain english, understandable by a reader with no coding experience.
* Use comments to break code into discrete sections.

Example:
<a name="format"></a>

```css
/* This is a simple one line comment */

/**
 * This is a short description of your code.
 *
 * Don't hesitate to use longer descriptions that would take multiple lines or
 * multiple sentences. While comments should be simple, they should also not
 * exclude helpful details for the sake of fewer words.
 */
```


## 3. Format

Auro uses a set of stylelint rules to keep the style code easy to read, consistent and minimize errors.

* Selectors should have a single space before the opening brace and separate all rules with a single empty line.

```css
.selector1 {
    ...
}

.selector2 {
    ...
}
```

* A selector should appear only once in a file.

```css
.selector1 {
  /* compliant */
}

.selector2 {
  /* compliant */
}

.selector1 {
  /* non-compliant - combine with first instance */
}

```
* Indentation should be 2 spaces.
* With Sass, always nest selector combinators.

```css
#selector1 {
  &.selector2 {
    /* compliant */
  }
}

#selector1.selector2 {
  /* non-compliant */
}
```

* Selector combinations in should not have more than a single class, attribute and type.

```css
div {
  &.class {
    /* compliant */
  }
}

div {
  &[attr=`value`] {
    /* compliant */
  }
}

.class1 {
  &.class2 {
    /* non-compliant */
  }
}
```

* Restrict nesting Sass selectors to no more than two levels deep.

```css
:host {
  /* compliant */
  div {
    /* compliant */
    &:focus {
      /* compliant */
    }

    .selector1 {
      /* non-compliant */
    }

    &.selector1 {
      /* non-compliant */
    }
  }
}
```

* Comma separated selectors should be on multiple lines, one selector per line.

```css
.selector1,
.selector2 {
  /* compliant */
}

.selector3, .selector4 {
  /* non-compliant */
}
```

* Use single colon for pseudo selectors. e.g. `input:focus{}`.
* Sass `$` variables should be at the top of the selector block properties.
* Always place `@extend` statements on the first lines of a declaration block.
* Where possible, group `@include` statements at the top of a declaration block, after any `@extend` statements.

```css
.selector1 {
  @extend .rule;
  @include mixin;
  $var: value;

  property: value;
}
```
* Only one declaration per line, a single space after the colon and always use an ending semicolon.

```css
.selector1 {
  /* compliant */
  height: 10px;
  width: 10px;
}

.selector2 {
  /* non-compliant */
  height: 10px; width: 10px;
}

.selector3 {
  /* non-compliant */
  height:10px;
  width:10px;
}

.selector4 {
  /* non-compliant */
  height:10px;
  width:10px
}
```
* Never use redundant properties, duplicate Sass mixins or variables.

```css
.selector1 {
  height: 10px;
  width: 10px;
  height: 10px;  /* non-compliant */
}
```
* Comma separated values should appear on separate lines.

```css
.selector {
  background-image:
    linear-gradient(#fff, #ccc),
    linear-gradient(#f3c, #4ec);
  box-shadow:
    1px 1px 1px #000,
    2px 2px 1px 1px #ccc inset;
}
```
* Don't use leading zeroes in values. e.g. `.8` instead of `0.8`.
* _Where allowed_, avoid specifying units for zero-values, e.g. `margin: 0`.
* Opacity is written as a number rather than percentage. e.g. `.5` instead of `50%`.
* Colors should be written in modern format rather than legacy. e.g. `rgba(0 0 0 0)` instead of `rgba(0, 0, 0, 0)`.
* Don't use color names. e.g. `red`, `blue`
* Color hex values use lowercase and shorthand. e.g., `#fff`.
* Don't use `!important` flags. These can be avoided using better selector specificity.
* Font-weights should always use numbers. e.g. `700` instead of `bold`.
* Use single quotes consistently. e.g. `content: 'Lorem ipsum'`.
* Function url quotes should always be used. e.g. `url('path.com/image.jpg')`.
* Consider prefixing custom functions with `x-` or another namespace. This helps to avoid any potential to confuse your function with a native CSS function, or to clash with functions from libraries.
<a name="declaration-order"></a>

```css
.selector1 {
  width: x-func-name(1);
  /* other declarations */
}
```


## 4. Declaration order and grouping

Declarations should be consistently grouped and ordered.

Properties should be grouped by related properties (e.g. positioning and box model). Properties within each group should be ordered following common css patterns (e.g. top, right, bottom, left).

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;
}
```

<a name="additional"></a>
## 5. Additional Information

Further reading about idiomatic JavaScript can be found at [https://github.com/rwldrn/idiomatic.js](https://github.com/rwldrn/idiomatic.js).

[Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css) by Nicolas Gallagher was used as a reference for this document.

<auro-back-to-top focus-id="top" offset="0"></auro-back-to-top>
