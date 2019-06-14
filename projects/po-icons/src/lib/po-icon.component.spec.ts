import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoIconComponent } from './po-icon.component';

describe('PoIconsComponent', () => {
  let component: PoIconComponent;
  let fixture: ComponentFixture<PoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
