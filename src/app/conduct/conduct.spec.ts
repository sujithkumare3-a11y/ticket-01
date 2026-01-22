import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduct } from './conduct';

describe('Conduct', () => {
  let component: Conduct;
  let fixture: ComponentFixture<Conduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
