import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpageEmptyComponent } from './adminpageempty.component';

describe('AdminpageComponent', () => {
  let component: AdminpageEmptyComponent;
  let fixture: ComponentFixture<AdminpageEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpageEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpageEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
