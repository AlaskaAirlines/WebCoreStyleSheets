# CSS custom properties and ShadyCSS polyfill

ShadyCSS is part of the [web components pollyfill](/support/polyfills/webcomponentsjs) to support browsers that are not yet supporting web components and encapsulated CSS.

## The problem

When CSS custom properties are used in conjunction with other non-variable properties, this can cause shadyCSS to re-write unintended CSS. With Auro, each web component has a [fallback selector](https://zellwk.com/blog/older-browsers-css/#:~:text=Property%20fallbacks,-If%20a%20browser&text=When%20this%20happens%2C%20the%20browser,way%20to%20provide%20a%20fallback.&text=In%20this%20example%2C%20browsers%20that,fall%20back%20to%20display%3A%20block%20.) shipped with the component, but even with these fallbacks, there can be issues with the resulting CSS from shadyCSS.

For example

```css
.inputText
{
  font-size: var(--size-breakpoint-all-med);
  position: relative;
  width: 100%;
  padding: 2rem 2rem .5rem 0;
  padding: var(--size-scale-xl) var(--size-scale-xl) var(--size-scale-sml) 0;
  -webkit-transition: all .3s cubic-bezier(.215, .61, .355, 1);
        -o-transition: all .3s cubic-bezier(.215, .61, .355, 1);
          transition: all .3s cubic-bezier(.215, .61, .355, 1);
  border: 0 solid #58606c;
  border: 0 solid var(--color-base-shark);
  border-width: 0 0 1px;
  border-width: 0 0 var(--border-width-thin);
  border-radius: 0;
  background-color: transparent;
  caret-color: #0074cb;
  caret-color: var(--color-brand-blue-atlas-base);
}

```

ShadyCSS transforms it into this. Notice how the fallback selectors are there, but with the removal of the custom property, the style is valid and essentially over-writes the intended code.

```css
.auro-inputtext-1 .inputText.auro-inputtext {
  font-size: ; /* affected */
  position: relative;
  width: 100%;
  padding: 2rem 2rem 0.5rem 0;
  padding: 0; /* affected */
  -webkit-transition: all .3s cubic-bezier(.215, .61, .355, 1);
        -o-transition: all .3s cubic-bezier(.215, .61, .355, 1);
          transition: all .3s cubic-bezier(.215, .61, .355, 1);
  border: 0 solid #58606c;
  border: 0 solid; /* affected */
  border-width: 0 0 1px;
  border-width: 0 0; /* affected */
  border-radius: 0;
  background-color: transparent;
  caret-color: #0074cb;
  caret-color: ; /* affected */

}
```

## The solution

It has been adopted as a common best practice that a selector style will either contain all CSS custom properties or no custom properties at all. As example, the following code has been updated to comply with this standard.

```css
.inputText
{
  font-size: var(--size-breakpoint-all-med);
  position: relative;
  width: 100%;
  padding: var(--size-scale-xl) var(--size-scale-xl) var(--size-scale-sml);
  padding-left: 0;
  transition: all .3s cubic-bezier(.215, .61, .355, 1);
  border: 0 solid;
  border-color: var(--color-base-shark);
  border-bottom-width: var(--border-width-thin);
  border-radius: 0;
  background-color: transparent;
  caret-color: var(--color-brand-blue-atlas-base);
}

```

## Compliance

The following is compliant

```css
padding: var(--size-scale-xl) var(--size-scale-xl) var(--size-scale-sml);
padding-left: 0;
```

The following code is non-compliant

```css
padding: var(--size-scale-xl) var(--size-scale-xl) var(--size-scale-sml) 0;
```
