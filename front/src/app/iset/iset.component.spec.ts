import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsetComponent } from './iset.component';

describe('IsetComponent', () => {
  let component: IsetComponent;
  let fixture: ComponentFixture<IsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
