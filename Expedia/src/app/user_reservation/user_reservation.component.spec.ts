import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User_reservationComponent } from './user_reservation.component';

describe('User_reservationComponent', () => {
  let component: User_reservationComponent;
  let fixture: ComponentFixture<User_reservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User_reservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User_reservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
