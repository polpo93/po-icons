# Polpo-icons

This library extends MatIcons to accept icons from any material icons theme (default, outlined, two-tone, round, sharp).

PoIcons accepts themes material icons and themes in format "maticon--theme". 

Example: 
```html
<po-icon>donut_small--outlined</po-icon>
```

Angular content change lifecycle hook is also implemented, so it accepts angular interpolation in html

Example:
```html
<po-icon>{{icon}}</po-icon>
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## How to implement

Reference css styles from Google's Material Icons.

This line should be placed into the index.html inside the `<head></head>` tags:
```html
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
```

Then import the PoIconsModule from 'po-icons' to the module you want to use it in(app.module.ts).

Now use `<po-icon></po-icon>` from any of your module's component.html.

Remember syntax '--theme' after icon name to apply theme.

## Disclaimers

It is very early stage for this package, please use only for experimenting.
