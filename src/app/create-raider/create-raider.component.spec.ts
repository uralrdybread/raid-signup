import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaiderComponent } from './create-raider.component';

describe('CreateRaiderComponent', () => {
  let component: CreateRaiderComponent;
  let fixture: ComponentFixture<CreateRaiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRaiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
