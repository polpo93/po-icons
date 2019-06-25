import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { matIcons } from './mat-icons';
import { PoThemes } from 'po-icons';

import { MatDialog } from '@angular/material';
import { PoDialogColorComponent } from './po-dialog-color/po-dialog-color.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'po-icons';

  bgColor = '#fff';
  color = '#000';
  size = '24px';

  themes: PoThemes[] = ['baseline', 'outlined', 'round', 'sharp', 'two-tone'];
  icons: string[] = matIcons;

  collections = this.themes;

  form: FormGroup;

  filteredIcons$: Observable<string[]>;
  iconString: string;

  constructor(
    private matDialog: MatDialog
  ) {
    this.form = new FormGroup({
      collection: new FormControl(undefined, [Validators.required]),
      icon: new FormControl(undefined, [Validators.required]),
      size: new FormControl(24, [Validators.required])
    });
  }

  ngOnInit() {
    this.filteredIcons$ = this.form.controls.icon.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.icons))
    );
    this.onChanges();
  }

  onChanges() {
    this.form.valueChanges.subscribe((value) => {
      if (value.icon !== null) {
        this.iconString = value.icon + (value.collection ? '--' + value.collection : '');
      }
    });
    /*this.form.controls.collection.valueChanges.subscribe(() => {
      this.form.controls.icon.setValue('');
    });*/
    this.form.controls.size.valueChanges.subscribe((value) => {
      this.resize(value);
    });
  }

  private _filter(value: string, list: string[]): string[] {
    const filterValue = value.toLowerCase();
    return list.filter(option => option.toLowerCase().includes(filterValue));
  }

  changeComplete(event) {
    console.log({event});
  }

  openColorpicker() {
    console.log('open colorpicker');
    this.colorPicker(this.color).then((res) => this.color = res);
  }

  openBgColorpicker() {
    console.log('open BG colorpicker');
    this.colorPicker(this.bgColor).then((res) => this.bgColor = res);
  }

  colorPicker(color: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.matDialog.open(PoDialogColorComponent, {
        width: '250px',
        data: {color}
      });
      dialogRef.afterClosed().subscribe(
        (result) => result ? resolve(result) : reject()
      );
    });
  }
  resize(event) {
    this.size = event !== null || event !== undefined ? (event + 'px') : '24px';
  }
}
