import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'test-icon',
  templateUrl: './test-icon.component.html'
})
export class TestIconComponent {

  @ViewChild("content", {static: true}) contentWrapper: ElementRef;
  content: string = '';
  currentImg: string = '';
  theme: string;

  constructor(private cd: ChangeDetectorRef) {}

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
      }) 
    }
  }

  /** sets image to match format: <po-icon>icon--theme</po-icon>" */
  setImage(c: string) {
    let final = c.split('--');
    // style display:none adds white spaces, this removes them.
    final = final.map(string => string.replace(/ /g,''));
    this.currentImg = final[0];
    this.theme = final.length === 2 ? final[1] : undefined;
  }
}
