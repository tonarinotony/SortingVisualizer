import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceBarsComponent } from './interface-bars.component';

describe('InterfaceBarsComponent', () => {
  let component: InterfaceBarsComponent;
  let fixture: ComponentFixture<InterfaceBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
