import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbarComponent } from './newbar.component';

describe('NewbarComponent', () => {
  let component: NewbarComponent;
  let fixture: ComponentFixture<NewbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbarComponent]
    });
    fixture = TestBed.createComponent(NewbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
