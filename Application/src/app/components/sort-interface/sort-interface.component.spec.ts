import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortInterfaceComponent } from './sort-interface.component';

describe('SortInterfaceComponent', () => {
  let component: SortInterfaceComponent;
  let fixture: ComponentFixture<SortInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
