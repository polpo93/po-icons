import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoIconsComponent } from './po-icons.component';

describe('PoIconsComponent', () => {
  let component: PoIconsComponent;
  let fixture: ComponentFixture<PoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
