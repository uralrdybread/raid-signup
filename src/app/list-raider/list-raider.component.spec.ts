import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRaiderComponent } from './list-raider.component';

describe('ListRaiderComponent', () => {
  let component: ListRaiderComponent;
  let fixture: ComponentFixture<ListRaiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRaiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
