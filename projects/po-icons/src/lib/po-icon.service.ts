import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoIconService {

  // tslint:disable-next-line:variable-name
  private _sprites: string[] = [];
  // tslint:disable-next-line:variable-name
  private _fontIcons: string[] = [];
  private spritess: {[key: string]: string[]};

  constructor() {}

  /**
   * Import svg to the application and then use registerSprite with appropriate sprite name.
   * @param spriteName to use the imported sprite.
   */
  registerSprite(spriteName: string) {
    this._sprites.push(spriteName);
    console.log(spriteName);
  }
  /**
   * Register font-icons
   * @param fontIconsName to use the imported fonticons.
   */
  registerFontIcons(fontIconsName: string) {
    this._fontIcons.push(fontIconsName);
    console.log(fontIconsName);
  }

  /**
   * Returns true if spriteName exists
   * @param spriteName of the sprite to look for.
   */
  getSprite(spriteName: string): boolean {
    return this._sprites.findIndex((value) => value === spriteName) < 0 ? false : true;
  }
  /**
   * Returns true if fontIcon exists
   * @param fontIconsName of the fonticons to look for.
   */
  getFontIcons(fontIconsName: string) {
    return this._fontIcons.findIndex((value) => value === fontIconsName) < 0 ? false : true;
  }
  get sprites() {
    return this._sprites;
  }
  get fontIcons() {
    return this._fontIcons;
  }

  /**
   * Removes sprite from the service
   * @param spriteName of the sprite to delete
   */
  delSprite(spriteName: string) {
    this._sprites = this._sprites.filter((value) => value !== spriteName);
  }

  /**
   * Removes sprite from the service
   * @param fontIconsName of the fontIcons to delete
   */
  delFontIcons(fontIconsName: string) {
    this._fontIcons = this._fontIcons.filter((value) => value !== fontIconsName);
  }
}
