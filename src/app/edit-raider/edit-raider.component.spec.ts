import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRaiderComponent } from './edit-raider.component';

describe('EditRaiderComponent', () => {
  let component: EditRaiderComponent;
  let fixture: ComponentFixture<EditRaiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRaiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
