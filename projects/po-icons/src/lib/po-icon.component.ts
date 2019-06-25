import { Component, ViewChild, ElementRef, DoCheck, AfterViewChecked, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'po-icon',
  templateUrl: './po-icon.component.html'
})
export class PoIconComponent implements DoCheck, AfterViewChecked {

  @Input() color?: string;
  @Input() bgColor?: string;
  @Input() size?: number;
  @ViewChild('content') contentWrapper: ElementRef;
  content = ''; // store value

  currentIcon = '';
  namespace: string;

  constructor() {}

  /** required for angular to do change detection for the content */
  ngDoCheck() { }

  /** part of ngDoCheck, only hook that detects current view value */
  ngAfterViewChecked() {
    const c = this.contentWrapper.nativeElement.innerText;
    if (c !== this.content) {
      // dont move timeout out of the if scope. loop goes to infinite.
      setTimeout(() => {
        this.content = c;
        this.setImage(c);
      });
    }
  }

  /** sets image to match format: <po-icon>icon--theme</po-icon>" */
  setImage(c: string) {
    let final = c.split('--');
    // style display:none adds white spaces, this removes them.
    final = final.map((str) => str.replace(/ /g, ''));
    this.currentIcon = final[0];
    this.namespace = final.length === 2 ? final[1] : undefined;
  }
}
