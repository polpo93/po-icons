import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'po-dialog-color',
  templateUrl: './po-dialog-color.component.html',
  styleUrls: ['./po-dialog-color.component.scss']
})
export class PoDialogColorComponent {

  state: string;
  constructor(
    public dialogRef: MatDialogRef<PoDialogColorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {color: string}
  ) {
    this.state = data.color;
  }

  onAccept() {
    this.dialogRef.close(this.state);
  }

  onCancel() {
    this.dialogRef.close();
  }

  changeComplete(event) {
    this.state = event.color.hex;
    console.log(event);
  }

}
