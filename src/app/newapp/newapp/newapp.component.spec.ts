import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewappComponent } from './newapp.component';

describe('NewappComponent', () => {
  let component: NewappComponent;
  let fixture: ComponentFixture<NewappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewappComponent]
    });
    fixture = TestBed.createComponent(NewappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
