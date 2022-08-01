import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningBarComponent } from './dining-bar.component';

describe('DiningBarComponent', () => {
  let component: DiningBarComponent;
  let fixture: ComponentFixture<DiningBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
