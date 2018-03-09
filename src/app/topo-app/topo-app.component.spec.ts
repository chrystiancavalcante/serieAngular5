import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoAppComponent } from './topo-app.component';

describe('TopoAppComponent', () => {
  let component: TopoAppComponent;
  let fixture: ComponentFixture<TopoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
