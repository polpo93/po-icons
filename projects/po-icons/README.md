# Polpo-icons

This library extends MatIcons to accept icons from any material icons theme (default, outlined, two-tone, round, sharp). All of those icons listed in material design page is not working in the font-icons. Workaround with those icons, is to add them in the custom svg sprite and import the sprite into the po-icons.

There is typescript types defined for all of the material icons(not 100% accurate).

![welcome-po-icons](https://github.com/polpo93/po-icons/blob/master/documentation/poicon-intellisense.png?raw=true)

Example:

```html
<po-icon>donut_small--outlined</po-icon>
```

Angular content change lifecycle hook is also implemented, so it accepts angular interpolation in html

Example:

```html
<po-icon>{{icon}}</po-icon>
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.15.

## How to implement

Reference css styles from Google's Material Icons.

This line should be placed into the index.html inside the `<head></head>` tags:

```html
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
```

Then import the PoIconsModule from 'po-icons' to the module you want to use it in(app.module.ts).

![welcome-po-icons](https://github.com/polpo93/po-icons/blob/master/documentation/import-poicons.png?raw=true)

Now use `<po-icon></po-icon>` from any of your module's component.html.

Remember syntax '--theme' after icon name to apply theme.

## Customization

There are 3 optional attributes to modify po-icon content:

- color: string; (color style like: '#000')
- bgColor: string; (color style like: '#000')
- size: number; (number in pixels. modifies font-size or svg width/height.)

use like following:

```html
<po-icon [color]="#7ed321" [bgColor]="#4a4a4a" [size]="25px">account-login--open-iconic</po-icon>
```

## Custom SVG sprite

To add your svg sprite into po-icons (currently supports only one svg sprite) do followings:

1. Add your svg sprite to the assets folder

2. Import svg to the component you want to use it

    ```ts
    import '@assets/custom-sprite.svg';
    ```

    (@assets can be replaced with relative path "../../assets/custom-sprite.svg", or use typescript's path module resolution)

3. Register svg sprite to the po-icons service

    ```ts
    import { PoIconService } from 'po-icons';
    @Component({
      //..
    })
    export class AppComponent {
      constructor(private poIconService: PoIconService) {
        this.poIconService.registerSprite('custom-sprite-name-here'); // match with svg filename without the ".svg" end
      }
    }
    ```

4. Use custom-sprite icons.

    ```html
    <po-icon>icon-name--sprite-name</po-icon>
    ```

## More details

Git repository for the source-code and demo: <https://github.com/polpo93/po-icons>

## Disclaimers

It is very early stage for this package, please use only for experimenting.
