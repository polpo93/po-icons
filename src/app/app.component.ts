import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { matIcons } from './mat-icons';
import { PoThemes } from 'po-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'po-icons';
  themes: PoThemes[] = [undefined, 'outlined', 'round', 'sharp', 'two-tone'];
  form: FormGroup;
  icons: string[] = matIcons;
  filteredIcons$: Observable<string[]>;
  iconString: string;

  constructor() {
    this.form = new FormGroup({
      theme: new FormControl(undefined),
      icon: new FormControl(undefined, [Validators.required])
    });
  }

  ngOnInit() {
    this.filteredIcons$ = this.form.controls.icon.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.onChanges();
  }

  onChanges() {
    this.form.valueChanges.subscribe((value) => {
      if (value.icon !== null) {
        this.iconString = value.icon + (value.theme ? '--' + value.theme : '');
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.icons.filter(option => option.toLowerCase().includes(filterValue));
  }
}
