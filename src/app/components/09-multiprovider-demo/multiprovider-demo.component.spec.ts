import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiproviderDemoComponent } from './multiprovider-demo.component';

describe('MultiproviderDemoComponent', () => {
  let component: MultiproviderDemoComponent;
  let fixture: ComponentFixture<MultiproviderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiproviderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiproviderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
