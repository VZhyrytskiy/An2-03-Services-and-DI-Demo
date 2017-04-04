import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardRefDemoComponent } from './forward-ref-demo.component';

describe('ForwardRefDemoComponent', () => {
  let component: ForwardRefDemoComponent;
  let fixture: ComponentFixture<ForwardRefDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardRefDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardRefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
