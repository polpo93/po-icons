import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDialogColorComponent } from './po-dialog-color.component';

describe('PoDialogColorComponent', () => {
  let component: PoDialogColorComponent;
  let fixture: ComponentFixture<PoDialogColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoDialogColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoDialogColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
